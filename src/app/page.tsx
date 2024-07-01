'use client';
import Gnb from "@/components/Gnb";
import TodoForm from "../components/TodoForm";
import TodoIcon from "../../public/todoIcon.svg";
import DoneIcon from "../../public/doneIcon.svg";
import { useState } from "react";
import Item from "@/components/Item";
import TodoEmpty from "../../public/todoEmptyImg.svg";
import DoneEmpty from "../../public/doneEmptyImg.svg";

export default function Home() {
  const [todos, setTodos] = useState<{ todo: string; isDone: boolean }[]>([]);

  const addTodo = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, { todo, isDone: false }]);
  };

  const handleToggle = (todo: string, isDone: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.todo === todo ? { ...item, isDone } : item
      )
    );
  };

  const isNotDoneItems = todos.filter((item) => !item.isDone);
  const isDoneItems = todos.filter((item) => item.isDone);

  return (
    <div className="min-h-screen bg-gray-50">
      <Gnb />

      <main className="px-96">
        <TodoForm addTodo={addTodo} />

        <div className="grid gap-x-6 grid-cols-2">
          {/* TO DO */}
          <div>
            <TodoIcon />
            {isNotDoneItems.length === 0 ? (
              <div className="flex flex-col items-center">
                <TodoEmpty />
                <span className="text-center text-slate-400">할 일이 없어요.<br/>TODO를 새롭게 추가해주세요!</span>
              </div>
              ) : (
                isNotDoneItems.map((item, index) => (
                  <Item key={index} todo={item.todo} isDone={item.isDone} onToggle={handleToggle} />
                ))
              )
            }
          </div>

          {/* DONE */}
          <div>
            <DoneIcon />
            {isDoneItems.length === 0 ? (
              <div className="flex flex-col items-center">
                <DoneEmpty />
                <span className="text-center text-slate-400">아직 다 한 일이 없어요.<br/>해야 할 일을 체크해보세요!</span>
              </div>
              ) : (
                isDoneItems.map((item, index) => (
                  <Item key={index} todo={item.todo} isDone={item.isDone} onToggle={handleToggle} />
                ))
              )
            }
          </div>
        </div>
      </main>
    </div>
  );
}
