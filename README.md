# **프로젝트 개요**

- 제목: **Do It**
- 소개: 할 일 목록을 관리하는 To Do 서비스
- 필수 기술 스택: **Next.js**, **TypeScript**
- 개발 기간: 7일

<br/>

# 기획 요구 사항

## 1️⃣ 공통

- 제시된 폰트, 컬러 시스템을 설정해 주세요.
- 재사용성을 위해 공용 컴포넌트를 만들어 주세요.
- 반응형 웹 디자인을 준수해주세요.
    - 모바일 레이아웃
    - 태블릿 레이아웃
    - 데스크탑 레이아웃
 
## 2️⃣ 할 일 목록 페이지(`/`)

### 2-1. 목록 조회

- ‘로고’ 버튼을 클릭하면 ‘/’ 페이지로 이동합니다. (새로고침)
- 진행 중인 할 일과 완료된 할 일을 나누어 볼 수 있습니다.
- 할 일 목록은 무한스크롤로 이어집니다.

### 2-2. 할 일 추가

- 상단 입력창에 할 일 텍스트를 입력하고 `추가하기` 버튼을 클릭하거나 엔터를 치면 할 일을 새로 생성합니다.

### 2-3. 완료

- 할 일 항목의 왼쪽 버튼을 클릭하면 체크 표시가가 되면서 완료 상태가 됩니다.

## 3️⃣ 할 일 상세 페이지(`/items/{itemId}`)

### 3-1. 할 일 수정

- 할 일 항목을 클릭한 후 항목 수정이 가능합니다.
- 항목 이름을 수정할 수 있습니다.
- 메모를 추가할 수 있습니다.
- 이미지(최대 1개)를 첨부할 수 있습니다.
- `수정 완료` 버튼을 클릭하면 수정 사항이 반영되고, 할 일 목록 페이지로 이동합니다.

### 3-2. 할 일 삭제

- `삭제하기` 버튼을 클릭하면 할 일 삭제가 가능하며, 삭제 후 할 일 목록 페이지로 이동합니다.

<br/>

# ✍🏻 **Git Commit Convension** 

- 컨벤션은 `header: Body` 형태로 이루어집니다. (`:`뒤에만 space가 있음에 유의)

| 종류(header) | 설명 |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Fix | 버그 수정 |
| Docs | 문서 수정 |
| Refactor | 코드 리팩토링 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Style | 코드 포맷팅, 세미콜론 누락, 코드/로직 변경 없는 경우, 오타 수정, 탭 사이즈 변경, 변수명 변경 등 |
| Comment | 필요한 주석 추가 및 변경 |
| Init | 프로젝트 초기 생성 |
| Rename | 파일명 or 폴더명 수정 |
| Remove | 코드 or 파일 삭제 |
