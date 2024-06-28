import GnbLg from "../../public/GnbLg.svg";
// TODO) 네비게이션 바 반응형 추가. 모바일: GnbSm.svg, 태블릿: GnbMd.svg
// TODO) 네비게이션 바 상단에 고정

import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import Done from "../components/Done"
import TodoIcon from "../../public/TodoIcon.svg";
import DoneIcon from "../../public/DoneIcon.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <GnbLg />

      {/* max height와 양옆 padding이 필요하다. */}
      <main className="px-96">
        <TodoForm />

        {/* TO DO */}
        <div className = "grid gap-x-6 grid-cols-2">
          <div>
            <TodoIcon />
            <Todo />
          </div>

          {/* DONE */}
          <div>
            <DoneIcon />
            <Done />
          </div>
        </div>
      </main>
    </div>
  );
}
