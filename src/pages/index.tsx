import HomePage from "@/components/HomePage";
import { ThemeAtom } from "@/utils/atoms/ThemeAtom";
import { useAtom } from "jotai";
import { useEffect } from "react";

const index = () => {
  const [theme] = useAtom(ThemeAtom);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="">
        <HomePage />
      </div>
    </>
  );
};

export default index;
