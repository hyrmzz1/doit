'use client';
import Gnb from "@/components/Gnb";
import TodoForm from "../components/TodoForm";
import TodoIcon from "../../public/TodoIcon.svg";
import DoneIcon from "../../public/DoneIcon.svg";
import { useState } from "react";
import Item from "@/components/item";

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Gnb />

      <main className="px-96">
        <TodoForm addTodo={addTodo} />

        <div className="grid gap-x-6 grid-cols-2">
          {/* TO DO */}
          <div>
            <TodoIcon />
            {todos
              .filter((item) => !item.isDone)
              .map((item, index) => (
                <Item key={index} todo={item.todo} isDone={item.isDone} onToggle={handleToggle} />
              ))}
          </div>

          {/* DONE */}
          <div>
            <DoneIcon />
            {todos
              .filter((item) => item.isDone)
              .map((item, index) => (
                <Item key={index} todo={item.todo} isDone={item.isDone} onToggle={handleToggle} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
