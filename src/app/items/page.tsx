import Gnb from "@/components/Gnb";
import DelBtn from "../../../public/DeleteBtn.svg";
import EditBtn from "../../../public/EditBtn.svg";
import CheckNone from "../../../public/checkNone.svg"
import CheckDone from "../../../public/checkDone.svg"

export default function Home() {
  return (
    // TODO) Gnb와 main을 합친 높이가 100vh여야 함 (스크롤 생기면 안됨)
    <div className="min-h-screen bg-gray-50">
      <Gnb />

      <main className="min-h-screen mx-96 pt-6 bg-white">
        <div className="px-16">
          <div className="h-12 rounded-2xl border-2 border-black flex justify-center items-center space-x-3">
            {/* 할일 bar -> props로 todo/done 여부, 텍스트 받아오기 */}
            {/* TODO) 체크 아이콘 toggle 적용하기 */}
            <CheckNone />
            <span>할일 내용</span>
          </div>

          <div
            className="flex justify-center mt-6 space-x-6"
            style={{ height: "30vh" }}
          >
            <div className="w-2/5 h-full rounded-2xl border-dashed border-2 border-slate-300">
              이미지, 추가버튼
            </div>
            <div
              className="w-3/5 h-full flex flex-col rounded-lg"
              style={{
                backgroundImage: "url(/memo.svg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}>
              <label htmlFor="comment" className="text-center text-amber-800 font-medium py-3">Memo</label>
              {/* TODO) focus 효과 없애기 */}
              <textarea
                id="comment"
                className="h-full resize-none text-center bg-transparent mx-3 mb-3"
                placeholder="내용을 입력해주세요"
              ></textarea>
            </div>
          </div>
          
          <div className="flex justify-end space-x-6 py-6">
            <EditBtn />
            <DelBtn />
          </div>
        </div>
      </main>
    </div>
  );
}
