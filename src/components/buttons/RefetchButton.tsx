import { LoadingAtom } from "@/utils/atoms/LoadingAtom";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const RefetchButton = () => {
  const [fetch] = useAtom(LoadingAtom);

  const queryClient = useQueryClient();

  const handleRefetch = async () => {
    queryClient.refetchQueries({ queryKey: ["hero"] });
  };
  return (
    <>
      <Button
        isLoading={fetch}
        onPress={handleRefetch}
        color="primary"
        variant="flat"
      >
        <span className={`${fetch ? "hidden" : ""}`}>Refetch</span>
      </Button>
    </>
  );
};

export default RefetchButton;
