import { Button } from "@nextui-org/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useAtom } from "jotai";
import { ThemeAtom } from "@/utils/atoms/ThemeAtom";
import { motion } from "framer-motion";

const SwitchTheme = () => {
  const [theme, setTheme] = useAtom(ThemeAtom);
  return (
    <>
      <Button
        onPress={() => setTheme((prev) => !prev)}
        isIconOnly
        color="primary"
        variant="flat"
      >
        {theme ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <FiMoon size={25} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.5 }}
          >
            <MdOutlineWbSunny size={25} />
          </motion.div>
        )}
      </Button>
    </>
  );
};

export default SwitchTheme;
