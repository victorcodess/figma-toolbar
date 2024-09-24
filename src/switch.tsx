import { motion } from "framer-motion";
import dev from "./assets/dev.svg";

const Switch = ({
  isDev,
  setIsDev,
}: {
  isDev: boolean;
  setIsDev: (isDev: boolean) => void;
}) => {
  return (
    <div className="absolute right-0 flex h-full items-center justify-center rounded-r-[12px] border-l border-[#444444] bg-[#333333] px-3">
      <div
        data-isOn={isDev}
        className={`switch flex h-6 w-10 cursor-pointer items-center rounded-[4px] ${isDev ? "bg-[#198F51] hover:bg-[#078348]" : "bg-[#383838] hover:bg-[#444444]"} px-[1px]`}
        onClick={() => setIsDev(!isDev)}
      >
        <motion.div
          layout
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-[#333333] shadow-[0_0_2px_0_rgba(68,68,68,1)]"
        >
          <img src={dev} alt="dev" />
        </motion.div>
      </div>
    </div>
  );
};

export default Switch;
