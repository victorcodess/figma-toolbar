import { useState } from "react";
import { motion } from "framer-motion";
import cursor from "./assets/cursor.svg";
import comment from "./assets/comment.svg";
import measure from "./assets/measure.svg";
import annotate from "./assets/annotate.svg";

const ToolbarDev = ({ isDev }: { isDev: boolean }) => {
  const [selectedButton, setSelectedButton] = useState("cursor");

  const buttons = [
    { id: "cursor", icon: cursor },
    { id: "measure", icon: measure },
    { id: "annotate", icon: annotate },
    { id: "comment", icon: comment },
  ];

  const handleButtonClick = (id: string) => {
    setSelectedButton(id);
  };

  return (
    <motion.div
      layout
      animate={{ top: isDev ? "0px" : "46px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="absolute top-[46px] flex min-w-max items-center gap-2 pt-2"
    >
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-[4px] p-2 ${
            selectedButton === button.id ? "bg-[#198F51]" : "hover:bg-[#383838]"
          }`}
          onClick={() => handleButtonClick(button.id)}
        >
          <img src={button.icon} alt={button.id} />
        </button>
      ))}
    </motion.div>
  );
};

export default ToolbarDev;
