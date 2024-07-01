'use client'
import CheckNone from "../../public/checkNone.svg";
import CheckDone from "../../public/checkDone.svg";
import { useEffect, useState } from "react";

interface ItemProps {
    todo: string;
    isDone: boolean;
    onToggle: (todo: string, isDone: boolean) => void;
}

export default function Item({ todo, isDone: initialIsDone,  onToggle }: ItemProps) {
    const [isDone, setIsDone] = useState<boolean>(false);

    useEffect(() => {
        setIsDone(initialIsDone);
      }, [initialIsDone]);
    
      const toggleCheck = () => {
        const newStatus = !isDone; // 새로운 상태 계산
        setIsDone(newStatus); // 상태 업데이트
        onToggle(todo, newStatus); // 외부 함수 호출
      };
    
    return (
        <div className="mt-4 flex justify-start items-center bg-slate-100 rounded-3xl border-2 border-black">
            <button onClick={toggleCheck} className="m-1">
                {isDone ? <CheckDone /> : <CheckNone />}
            </button>
            {todo}
        </div>
    );
}