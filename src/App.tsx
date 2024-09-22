import cursor from "./assets/cursor.svg";
import arrow from "./assets/arrow.svg";
import frame from "./assets/frame.svg";
import rectangle from "./assets/rectangle.svg";
import pen from "./assets/pen.svg";
import text from "./assets/text.svg";
import comment from "./assets/comment.svg";
import actions from "./assets/actions.svg";
import dev from "./assets/dev.svg";

function App() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <div className="fixed bottom-5 left-0 right-0 mx-auto flex h-[48px] w-[426px] items-center gap-2 rounded-[12px] bg-[#333333] pl-2 shadow-[0_1px_4px_0_rgba(0,0,0,0.33)]">
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

        <div className="absolute right-0 flex h-full items-center justify-center border-l border-[#444444] px-3">
          <div className="flex h-6 w-10 cursor-pointer items-center rounded-[4px] bg-[#383838] px-[1px] hover:bg-[#444444]">
            <div className="flex h-[22px] w-[22px] items-center justify-center rounded-[4px] bg-[#333333] shadow-[0_0_2px_0_rgba(68,68,68,1)]">
              <img src={dev} alt="dev" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
