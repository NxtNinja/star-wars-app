import { fetchFilms } from "@/utils/fetchFilms";
import { fetchStarShips } from "@/utils/fetchStarShips";
import { fetchVehicles } from "@/utils/fetchVehicles";
import { Hero } from "@/utils/types/CharacterType";
import { Card, CardHeader, CardBody, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

const HeroCard = ({ info }: { info: Hero }) => {
  const details = [
    { name: "Eye Color", data: info.eye_color },
    { name: "Skin Color", data: info.skin_color },
    { name: "Hair Color", data: info.hair_color },
    { name: "Weight", data: info.mass },
    { name: "Height", data: info.height },
  ];

  const { data, isLoading, isFetching, isFetched, isSuccess } = useQuery({
    queryKey: ["films"],
    queryFn: () => fetchFilms(info.films),
    refetchOnWindowFocus: false,
  });
  const { data: vehicles } = useQuery({
    queryKey: ["vehicles"],
    queryFn: () => fetchVehicles(info.vehicles),
    refetchOnWindowFocus: false,
  });
  const { data: starships } = useQuery({
    queryKey: ["starships"],
    queryFn: () => fetchStarShips(info.starships),
    refetchOnWindowFocus: false,
  });

  console.log(starships);

  if (isLoading || isFetching) {
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
        <Card className="w-[400px] max-h-[600px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-3xl font-bold">{info.name}</p>
              <p className="text-lg text-default-500">{info.gender}</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-7 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            <div className="grid grid-cols-2 gap-4">
              {details.map((items) => (
                <p key={items.name} className="">
                  {items.name}:{" "}
                  <span className="text-xl font-bold">{items.data}</span>
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="">Films: </p>
              <div className="grid grid-cols-2 gap-2">
                {data?.map((item) => (
                  <p key={item.url} className="">
                    <span className="text-lg font-bold">{item.title}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="">StartShips: </p>
              <div className="grid grid-cols-2 gap-2">
                {starships?.length !== 0 ? (
                  starships?.map((item) => (
                    <p key={item.url} className="">
                      <span className="text-lg font-bold">{item.name}</span>
                    </p>
                  ))
                ) : (
                  <p className="">
                    <span className="text-base">No Starships to show</span>
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="">Vehicles: </p>
              <div className="grid grid-cols-2 gap-2">
                {vehicles?.length !== 0 ? (
                  vehicles?.map((item) => (
                    <p key={item.url} className="">
                      <span className="text-lg font-bold">{item.name}</span>
                    </p>
                  ))
                ) : (
                  <p className="">
                    <span className="text-base">No vehicles to show</span>
                  </p>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
};

export default HeroCard;
