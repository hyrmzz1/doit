import Gnb from "@/components/Gnb";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import Done from "../components/Done"
import TodoIcon from "../../public/TodoIcon.svg";
import DoneIcon from "../../public/DoneIcon.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Gnb />

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
