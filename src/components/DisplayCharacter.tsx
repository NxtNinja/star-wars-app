import { LoadingAtom } from "@/utils/atoms/LoadingAtom";
import { Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import { fetchCharacter } from "@/utils/fetchCharacter";

const DisplayCharacter = () => {
  const [id, setId] = useState<number>(0);
  const [load, setLoad] = useAtom(LoadingAtom);
  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["hero"],
    queryFn: () => fetchCharacter(id),
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
  }, [isLoading, isFetching, load]);

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
