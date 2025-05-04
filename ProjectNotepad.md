# 🧹 Create React App 기본 파일 정리 메모

이 문서는 `npx create-react-app`으로 생성된 기본 React 프로젝트에서  
정우의 감성 플레이어 프로젝트에 **불필요한 파일들을 정리하기 전**,  
각 파일의 **역할과 삭제 여부**를 정확히 이해하기 위해 작성한 메모입니다.

---

## **✅ 삭제 대상 파일 및 코드 설명**

### 1. `reportWebVitals.js`
- **역할**: 성능 측정 (페이지 로딩 속도, 반응 시간 등)
- **사용 예시**: `reportWebVitals(console.log);`
- **삭제 이유**: 성능 분석 도구를 사용하지 않기 때문에 불필요

---

### 2. `setupTests.js`
- **역할**: 테스트 실행 전에 공통 설정을 적용하는 파일
- **사용 예시**: 테스트 프레임워크 초기화
- **삭제 이유**: 테스트 코드를 작성하지 않으므로 필요 없음

---

### 3. `App.test.js`
- **역할**: `App.js`의 렌더링이 제대로 되는지 확인하는 기본 테스트
- **사용 예시**: "learn react"라는 문구가 화면에 나오는지 검사
- **삭제 이유**: 해당 문구는 제거할 예정이며, 테스트도 작성하지 않기 때문에 삭제 가능

---

### 4. `logo.svg`
- **역할**: CRA 기본 React 로고 이미지
- **사용 위치**: `App.js` 내부 `<img src={logo} ... />`
- **삭제 이유**: 로고를 사용하지 않으며, 자체 테마 UI로 대체할 예정

---

### 5. 관련 코드들

#### `App.js` 내
```js

import logo from './logo.svg';

<img src={logo} className="App-logo" alt="logo" />

```

### `index.js` 내

```js

import reportWebVitals from './reportWebVitals';
reportWebVitals();

```

---

## **🎼 곡 및 테마 데이터 (data/tracks.js)**

```sh
const tracks = [
  {
    id: "winter",
    title: "冬のはじまり",
    youtubeUrl: "https://youtu.be/wtJcLWeY114?si=VxtxAapg1MlSx0pt",
    background: "/assets/winter.mp4",
  },
  {
    id: "spring",
    title: "春の予感",
    youtubeUrl: "https://youtu.be/FT0GKCuSaW0?si=rEDzyawLST1lNu8r",
    background: "/assets/spring.mp4",
  },
  {
    id: "summer",
    title: "夏の青",
    youtubeUrl: "https://youtu.be/UvZhqTDOe7M?si=y8Z8R9WU52gVfPbS",
    background: "/assets/summer.mp4",
  },
  {
    id: "autumn",
    title: "秋風の記憶",
    youtubeUrl: "https://youtu.be/ir5cF-EvBig?si=loNhL-05kpgHP07l",
    background: "/assets/autumn.mp4",
  },
  {
    id: "aurora",
    title: "northern lights",
    youtubeUrl: "https://youtu.be/eBLHijpaODM?si=dwgE9AD1EzJarUe5",
    background: "/assets/aurora.mp4",
  },
];
export default tracks
```

---

# 프로젝트를 위한 확장자 설치

- JSCode로 Tailwind CSS IntelliSense 확장자 설치

- 또는
```sh

npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p

```

### 이번 프로젝트를 위한 코드수정

```sh
# postcss.config.js 
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

# tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

# .vscode/settings.json

{
  "css.lint.unknownAtRules": "ignore"
}