
![git-banner](https://github.com/sprint-team3/GGF/assets/92169354/fbd01321-209f-4856-9124-3c00d61f3b0f)

<div align="center">

### [💻 배포링크](https://good-game-friends.vercel.app) | [📝 팀 위키](https://github.com/sprint-team3/GGF/wiki)

</div>

# 🎮 GGF: Good Game Friends

게이머들을 위한 특별한 공간으로, 다양한 게임을 온라인 및 오프라인에서 함께 즐기고 소통할 수 있는 예약 커뮤니티 웹사이트입니다.

### Supported Games
- League of Legends (롤)
- Battlegrounds (배틀그라운드)
- Overwatch (오버워치)
- Minecraft (마인크래프트)

### 아래와 같은 유형의 게시글을 올릴 수 있습니다
- 파티원 모집(오프라인/온라인)
- 클랜원 모집
- 게임 공략

# ❓ How to run this project
```
# repository clone
git clone https://github.com/sprint-team3/GGF.git

## 프로젝트 폴더 이동
cd GGF

# npm 설치
npm install

# dev server
npm run dev

# build
npm run build

# 프로덕션 모드
npm run start
```

# 🛠️ Tech Stack
### Language  
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white">

### Style
<img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/Story book-FF4785?style=for-the-badge&logo=Storybook&logoColor=white"> 

### Library & Framework
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=Zod&logoColor=white"> <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white"> <img src="https://img.shields.io/badge/react hook form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-F36D00?style=for-the-badge&logo=&logoColor=white">  <img src="https://img.shields.io/badge/react modal-61DAFB?style=for-the-badge&logo=&logoColor=white">
<img src="https://img.shields.io/badge/day js-FF5F4C?style=for-the-badge&logo=&logoColor=white">  <img src="https://img.shields.io/badge/day picker-216BA5?style=for-the-badge&logo=&logoColor=white"> 

### Convention
<img src="https://img.shields.io/badge/stylelint-263238?style=for-the-badge&logo=stylelint&logoColor=white">  <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-181717?style=for-the-badge&logo=husky&logoColor=white"> 

<br />

# ⬇️ Flow Chart
<img width="3420" alt="User_Flow" src="https://github.com/sprint-team3/GGF/assets/92169354/cffea369-a117-41f2-a450-ed636d779776">

<br />

# 🚀 기능 시연
- [Features By Pages-Landing](https://github.com/sprint-team3/GGF/wiki/Features-by-pages-:-Landing)
- [Features By Pages-List](https://github.com/sprint-team3/GGF/wiki/Features-by-pages-:-List)
- [Features By Pages-PostDetail](https://github.com/sprint-team3/GGF/wiki/Features-by-pages-:-Post-Detail)
- [Features By Pages-Create Post](https://github.com/sprint-team3/GGF/wiki/Features-by-pages-:-Create-Post)
- [Features By Pages-My Page](https://github.com/sprint-team3/GGF/wiki/Features-by-pages-:-MyPage)

<br />

# 💻 담당 기능
### ChatBot 구현
- OpenAI를 활용한 대화형 챗봇으로 편의성 제공 및 사용자의 초기 접근성 향상을 위한 FAQ(자주 묻는 질문) 제공
### 예약하기 / 취소하기
- 예약 현황 컴포넌트를 구현하여 선택된 날짜의 시간대별로 예약하기 기능 구현
### 리뷰 작성
- react-hook-form과 Zod를 활용하여 별점 최소 1점 이상, 리뷰 내용 최소 5자 이상 유효성 검사 후 리뷰 작성
### 랜딩 페이지
- 클랜 모집: 각 게임별 최신 클랜 모집을 반영하여 총 12건의 모집 카드를 슬라이드 배너로 구현
### 마이 페이지
- 신청한 예약: 예약 현황 페이지, 신청 예약 일자가 지났을 경우 리뷰하기 기능 생성 및 리뷰 작성 시 완료 상태로 변경
### 공용 컴포넌트 구현
- 사용법 문서화 및 스토리보드 등록
- Badge/Modal/PostCard/CardButton/SliderButton/ProfileSummary/ReviewCard/StarRating/Tag/Error
### 성능 최적화
- 페이지별 Accessibility 개선
- 페이지별 SEO 개선
### 환경
- 전역으로 사용되는 SCSS 파일 세팅

<br />

# 🧑‍💻 Team

<table>
  <tr>
    <th>김성연</th>
    <th>김희수</th>
    <th>지현기</th>
    <th>허우림</th>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/CheeseB">CheeseB</a></td>
    <td align="center"><a href="https://github.com/designsoo">designsoo</a></td>
    <td align="center"><a href="https://github.com/ccwnc">ccwnc</a></td>
    <td align="center"><a href="https://github.com/grapefruit13">grapefruit13</a></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/sprint-team3/GGF/assets/92169354/404016f8-d2a4-4807-8946-5b4f3d61f67d" alt="loopy_sy" width="300px" height="200px"></td>
    <td align="center"><img src="https://github.com/sprint-team3/GGF/assets/92169354/3b37de54-1527-4340-b3bc-4a48bdbb2559" alt="loopy_hs" width="300px" height="200px"></td>
    <td align="center"><img src="https://github.com/sprint-team3/GGF/assets/43297823/93721720-51f0-4913-a0e9-aaf60c602a2e" alt="image" width="300px" height="200px"></td>
    <td align="center"><img src="https://github.com/sprint-team3/GGF/assets/92169354/f556b828-5ad2-426c-aa04-487ee0ebec06" alt="loopy_wl" width="300px" height="200px"></td>
  </tr>
  <tr>
    <td align="center">치즈볼맛 개발자</td>
    <td align="center">피그마맛 개발자</td>
    <td align="center">쿠키맛 개발자</td>
    <td align="center">허스키맛 개발자</td>
  </tr>
</table>



