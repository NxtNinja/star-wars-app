import { LoadingAtom } from "@/utils/atoms/LoadingAtom";
import { Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const DisplayCharacter = () => {
  const [id, setId] = useState<number>();
  const [load, setLoad] = useAtom(LoadingAtom);
  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["hero"],
    queryFn: async () => {
      await new Promise<void>((resolve) => setTimeout(resolve, 1500));

      const res = await axios.get(`https://swapi.dev/api/people/${id}`);

      const data = res.data;

      return data;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const id = Math.floor(Math.random() * 80);
    setId(id);
  }, []);

  //   console.log(id);
  console.log(data);

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [isLoading, isFetching]);

  if (isFetching || isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 h-[90dvh]">
        <Spinner size="lg" />
        <p className="">Please wait</p>
      </div>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className=""></div>
      </>
    );
  }
};

export default DisplayCharacter;
