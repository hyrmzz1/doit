// 할 일 입력 및 추가 컴포넌트
import { ChangeEvent, useState, FormEvent } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="flex items-center space-x-6 my-6">
      {/* Todo 입력 창 */}
      {/* TODO) focus 효과 부여 */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-4/5 h-12 px-6 bg-slate-100 rounded-3xl border-2 border-black"
        placeholder="할 일을 입력해주세요"
      />

      {/* Todo 추가 버튼 */}
      {/* TODO) hover 효과 부여 */}
      <button
        type="submit"
        className="w-1/5 h-12 bg-slate-100 rounded-3xl border-2 border-black"
      >
        + 추가하기
      </button>
    </form>
  );
}
