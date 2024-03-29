<img src="/src/views/box_logo.png" alt="Collector's" style="margin: 0 auto; display: block;"/>

# [웹 사이트 보러가기](https://collectors-twenty.herokuapp.com/)

# Collector’s

빠르게 변화하는 현대 사회에서 살아가는 많은 사람들은 한 번쯤 자신이 초능력이나 마법 능력을 갖는 상상을 합니다. 사람들은 가끔씩 강력한 힘을 가지거나 천재적인 두뇌를 보유하여 자신의 이름을 세상에 남길만한 업적을 이루는 것을 상상하곤 합니다. 이러한 사람들의 니즈를 충족시키기 위해 팀스물은 여러분들을 위한 여러 능력들을 모아 판매하고 있습니다.

수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰, <a href="https://collectors-twenty.herokuapp.com/">Collector’s</a>에 방문해보세요!


## 1. 기술 스택 및 디렉토리 구조
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
<img src="https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=Swiper&logoColor=white" />
<img src="https://img.shields.io/badge/Font Awesome-528DD7?style=flat&logo=FontAwesome&logoColor=white" />
<br />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=Express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=white" />
<img src="https://img.shields.io/badge/AmazonS3-569A31?style=flat&logo=AmazonS3&logoColor=white" />
<br />
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white" />
<img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=GitLab&logoColor=white" />
<br />
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white" />
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white" />
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white" />
<img src="https://img.shields.io/badge/VS Code-007ACC?&style=flat&logo=visualstudiocode&logoColor=white" />

```
📦 
├─ README.md
├─ index.js
├─ package.json
└─ src
   ├─ app.js
   ├─ db
   │  ├─ index.js
   │  ├─ models
   │  │  ├─ category-model.js
   │  │  ├─ item-model.js
   │  │  ├─ orderInfo-model.js
   │  │  └─ user-model.js
   │  └─ schemas
   │     ├─ category-schema.js
   │     ├─ item-schema.js
   │     ├─ orderInfo-schema.js
   │     ├─ types
   │     │  └─ short-id.js
   │     └─ user-schema.js
   ├─ middlewares
   │  ├─ admin-required.js
   │  ├─ error-handler.js
   │  ├─ index.js
   │  ├─ logger.js
   │  ├─ login-required.js
   │  └─ s3.js
   ├─ passport
   │  ├─ index.js
   │  └─ strategies
   │     ├─ google.js
   │     └─ naver.js
   ├─ routers
   │  ├─ auth-router.js
   │  ├─ category-router.js
   │  ├─ index.js
   │  ├─ item-router.js
   │  ├─ orderInfo-router.js
   │  ├─ user-router.js
   │  └─ views-router.js
   ├─ services
   │  ├─ auth-service.js
   │  ├─ category-service.js
   │  ├─ index.js
   │  ├─ item-service.js
   │  ├─ orderInfo-service.js
   │  └─ user-service.js
   ├─ utils
   │  ├─ get-date.js
   │  ├─ index.js
   │  ├─ setting-role.js
   │  └─ shuffle-array.js
   └─ views
      ├─ admin
      ├─ adminItemEdit
      ├─ adminManage
      ├─ adminOrderList
      ├─ adminRegister
      ├─ api.js
      ├─ cart
      ├─ components
      │  ├─ Admin
      │  ├─ Category
      │  ├─ Footer
      │  ├─ Nav
      │  ├─ Order
      │  ├─ QuickMenu
      │  └─ SearchBar
      ├─ detail
      ├─ edit
      ├─ home
      ├─ list
      ├─ login
      ├─ order
      ├─ orderComplete
      ├─ orderlist
      ├─ register
      ├─ resign
      ├─ style.css
      ├─ terms
      ├─ useful-functions.js
      ├─ user
      └─ userInfo
```

## 2. 서비스 주요 기능

> **전체 기능**
> 
1. GNB(Global Navigation Bar)
2. 사이드 퀵 메뉴와 TopScroll 버튼

> **유저 기능**
> 
1. 회원 가입 및 로그인
2. 소셜 로그인 - 카카오, 네이버, 구글
3. 로그아웃 및 회원 탈퇴
4. 홈페이지 메인
    - 매진 임박 상품 추천 섹션
    - 신상품 섹션
    - 10,000원 이하 상품 섹션
5. 최근 본 상품 기능
6. 상품 목록 페이지
    - 카테고리별 상품 조회 기능
    - 상품명, 상품 태그 검색 기능
    - 매진 임박 스티커 기능

> **계정 관리 기능**
> 
1. 회원 정보 확인 기능
    - 구매 누적 금액에 따른 회원 등급을 통해 구매 유도
    - 구매 상품 내역에 따른 Stat 부여를 통해 구매 유도
2. 회원 정보 수정 기능
    - 비밀번호 변경 기능
3. 회원 탈퇴 기능

> **주문 기능**
> 
1. 장바구니 기능
    - 상품 추가
    - 수량 조절 가능
    - 전체 삭제, 선택 삭제 기능
    - 품절 상품 자동 제거 기능
2. 주문하기 기능
    - 배송지 정보 입력 - Daum api
    - 요청 사항 선택 기능 - 직접 추가 가능
    - 회원 등급에 따른 할인 혜택 부여
3. 주문 내역 조회
    - 주문 취소 기능


> **관리자 기능**
> 
1. 상품 등록 기능
    - 상품 상세 정보 입력 기능
    - 상품 이미지 삽입
    - 상품 검색 키워드 설정 기능
2. 상품 관리 기능
    - 상품 삭제 기능
3. 상품 정보 수정 기능
    - 상품 상세 정보 수정 기능
    - 상품 검색 키워드 수정 기능
4. 주문 내역 조회 기능
    - 전 회원 주문 내역 조회
    - 배송 상태 변경
    - 주문 취소


## 4. 서비스 흐름

- 일반 회원
- 관리자

## 5. 프로젝트 팀원 역할 분담

| 이름 | 담당 업무 |
| --- | --- |
| 김예리 | 팀장 / 프론트엔드 개발 |
| 이형민 | 프론트엔드 개발 |
| 김혜령 | 백엔드 개발 |
| 김명진 | 백엔드 개발 |

### 개인 담당 역할

#### 이형민
- 와이어프레임 및 디자인 작업
- 홈페이지 개발
- Swiper.js를 활용해 광고 배너 구현
- 매진 임박 상품 추천 섹션
- 신상품 추천 섹션
- 10,000원 이하 상품 추천 섹션
- 상품 목록 페이지 개발
- GNB, Sticky 퀵 메뉴 개발
- 최근 본 상품 기능 개발
- 유저 CRUD, 내 정보 페이지 개발
- 게이미피케이션을 위한 유저 Stat 기능 개발
