// 할 일 입력 및 추가 컴포넌트
// TODO) form 기능 구현

export default function TodoForm() {
  return (
    <div className="flex items-center space-x-6 my-6">  {/* 위아래 margin 안먹음 */}
      {/* Todo 입력 창 */}
      <input
        type="text"
        className="w-4/5 h-12 px-6 bg-slate-100 rounded-3xl border-2 border-black"
        placeholder="할 일을 입력해주세요"
      />

      {/* Todo 추가 버튼 */}
      <button
        className="w-1/5 h-12 bg-slate-100 rounded-3xl border-2 border-black"
      >
        + 추가하기
      </button>
    </div>
  );
}
