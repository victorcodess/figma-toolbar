import cursor from "./assets/cursor.svg";
import arrow from "./assets/arrow.svg";
import frame from "./assets/frame.svg";
import rectangle from "./assets/rectangle.svg";
import pen from "./assets/pen.svg";
import text from "./assets/text.svg";
import comment from "./assets/comment.svg";
import actions from "./assets/actions.svg";
import dev from "./assets/dev.svg";
import measure from "./assets/measure.svg";
import annotate from "./assets/annotate.svg";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isDev, setIsDev] = useState(false);

  return (
    <main className="white relative min-h-screen w-full bg-black/50">
      <motion.div
        animate={{ width: isDev ? "234px" : "426px" }}
        transition={{ delay: 0.5, duration: 0.55, type: "spring", bounce: 0 }}
        className="fixed bottom-5 left-0 right-0 mx-auto flex h-[48px] w-[426px] flex-col items-start gap-4 overflow-hidden rounded-[12px] bg-[#333333] pl-2 shadow-[0_1px_4px_0_rgba(0,0,0,0.33)]"
      >
        <motion.div
          layout
          animate={{ top: isDev ? "-48px" : "0px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="absolute top-0 flex min-w-max items-center gap-2 pt-2"
        >
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] bg-[#0092ff] p-2">
              <img src={cursor} alt="cursor" />
            </div>
            <div className="flex h-8 cursor-pointer items-center justify-center rounded-[4px] p-1 hover:bg-[#383838]">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={frame} alt="frame" />
            </div>
            <div className="flex h-8 cursor-pointer items-center justify-center rounded-[4px] p-1 hover:bg-[#383838]">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={rectangle} alt="rectangle" />
            </div>
            <div className="flex h-8 cursor-pointer items-center justify-center rounded-[4px] p-1 hover:bg-[#383838]">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={pen} alt="pen" />
            </div>
            <div className="flex h-8 cursor-pointer items-center justify-center rounded-[4px] p-1 hover:bg-[#383838]">
              <img src={arrow} alt="arrow" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={text} alt="text" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={comment} alt="comment" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={actions} alt="actions" />
            </div>
          </div>
        </motion.div>
        <motion.div
          layout
          animate={{ top: isDev ? "0px" : "46px" }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="absolute top-[46px] flex min-w-max items-center gap-2 pt-2"
        >
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] bg-[#198F51] p-2">
              <img src={cursor} alt="cursor" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={measure} alt="measure" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={annotate} alt="annotate" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <div className="h-8 w-8 cursor-pointer rounded-[4px] p-2 hover:bg-[#383838]">
              <img src={comment} alt="comment" />
            </div>
          </div>
        </motion.div>

        <div className="absolute right-0 flex h-full items-center justify-center rounded-r-[12px] border-l border-[#444444] bg-[#333333] px-3">
          <div
            data-isOn={isDev}
            className={`switch flex h-6 w-10 cursor-pointer items-center rounded-[4px] bg-[#383838] ${isDev ? "bg-[#198F51] hover:bg-[#078348]" : ""} px-[1px] hover:bg-[#444444]`}
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
      </motion.div>
    </main>
  );
}

export default App;
