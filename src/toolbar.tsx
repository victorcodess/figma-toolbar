import { useState } from "react";
import { motion } from "framer-motion";
import cursor from "./assets/cursor.svg";
import arrow from "./assets/arrow.svg";
import frame from "./assets/frame.svg";
import rectangle from "./assets/rectangle.svg";
import pen from "./assets/pen.svg";
import text from "./assets/text.svg";
import comment from "./assets/comment.svg";
import actions from "./assets/actions.svg";

const Toolbar = ({ isDev }: { isDev: boolean }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>("cursor");

  const buttons = [
    { id: "cursor", icon: cursor, hasDropdown: true },
    { id: "frame", icon: frame, hasDropdown: true },
    { id: "rectangle", icon: rectangle, hasDropdown: true },
    { id: "pen", icon: pen, hasDropdown: true },
    { id: "text", icon: text, hasDropdown: false },
    { id: "comment", icon: comment, hasDropdown: false },
    { id: "actions", icon: actions, hasDropdown: false },
  ];

  const handleButtonClick = (id: string) => {
    setSelectedButton(id);
  };

  return (
    <motion.div
      layout
      animate={{ top: isDev ? "-48px" : "0px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.5 }}
      className="absolute top-0 flex min-w-max items-center gap-2 pt-2"
    >
      {buttons.map((button) => (
        <div key={button.id} className="flex items-center gap-[2px]">
          <button
            className={`h-8 w-8 cursor-pointer rounded-[4px] p-2 ${
              selectedButton === button.id
                ? "bg-[#0092ff]"
                : "hover:bg-[#383838]"
            }`}
            onClick={() => handleButtonClick(button.id)}
          >
            <img src={button.icon} alt={button.id} />
          </button>
          {button.hasDropdown && (
            <div className="flex h-8 cursor-pointer items-center justify-center rounded-[4px] p-1 hover:bg-[#383838]">
              <img src={arrow} alt="arrow" />
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default Toolbar;
