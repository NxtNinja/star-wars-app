import { LoadingAtom } from "@/utils/atoms/LoadingAtom";
import { Hero } from "@/utils/types/CharacterType";
import { Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import HeroCard from "./HeroCard";

const DisplayCharacter = () => {
  const [id, setId] = useState<number>();
  const [load, setLoad] = useAtom(LoadingAtom);
  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["hero"],
    queryFn: async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));

      const res = await axios.get(`https://swapi.dev/api/people/${id}`);

      const data = res.data as Hero;

      return data;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const id = Math.floor(Math.random() * 80);
    setId(id);
  }, [isLoading, isFetching]);

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [isLoading, isFetching]);

  if (isFetching || isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 h-[80dvh]">
        <Spinner size="lg" />
        <p className="">Please wait</p>
      </div>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="flex justify-center items-center h-[80dvh]">
          <HeroCard info={data} />
        </div>
      </>
    );
  }
};

export default DisplayCharacter;
