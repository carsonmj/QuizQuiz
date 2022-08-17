# Quiz Quiz

#### 다양한 주제의 랜덤 퀴즈를 풀어보자!

## How to start

- dependency 설치

```
npm install
```

- 개발 모드 실행

```
npm run dev
```

- 빌드 실행

```
npm run build
```

- 서버 실행

```
npm run start
```

- 개발 모드 실행 혹은 빌드 이후 서버 실행 후 브라우저 접속 http://localhost:3000/

- API 호출을 위한 환경 변수

```
LOCAL_URL=http://localhost:3000/api/description
PRODUCTION_URL={your domain}/api/description
```

## Features

Visit Quiz Quiz! https://quizquiz.vercel.app/

- **Web**
  <br><img width="480" alt="quiz_gif" src="https://user-images.githubusercontent.com/54696956/185021261-dcf6e67d-9ea8-4d13-9677-2c6ca85da6ad.gif">
  <br>

- **Mobile**
  <br><img width="480" alt="mobile_pages" src="https://user-images.githubusercontent.com/54696956/185023582-dfde80b8-07b8-4998-91e9-df563dfebd02.png">

- 반응형 웹앱으로 데스크탑과 모바일 모두 지원합니다.
- [Open API](https://opentdb.com/api_config.php)에서 가져온 상식 퀴즈(객관식)를 풀어볼 수 있는 앱입니다.
- 메인 화면에서 Start 버튼 클릭하여 퀴즈를 시작할 수 있습니다.
- 문항에 대한 답안을 4개의 보기 중에서 선택합니다.
  - 답안 선택 후 정답 여부와 오답일 경우 해당 문항의 정답을 확인할 수 있습니다.
  - 답안을 선택해야 다음 문항으로 넘어갈 수 있습니다.
  - 이전 답안을 확인할 수 있는 앞으로 가기 버튼이 존재합니다.
- 모든 문항을 완료하면 **경과 시간과 정답 갯수, 오답 갯수 차트**를 확인할 수 있습니다.
- 결과 화면에서는 **해당 문제를 다시 풀기, 오답 내용 확인, 새로운 문제 풀기**를 선택할 수 있습니다.

## ⚠️ Requirement

최신 Chrome Browser 사용에 맞춰 구현되었습니다.
<br>

## Skills

#### Next.js

Page 기반 라우팅과 SEO 향상을 위한 작업을 용이하게 하고자 Next.js를 사용하였습니다. 다시 풀기를 제외하고 매번 새로운 퀴즈 리스트를 받아오기 때문에 Client-Side-Rendering이 조금 더 적합하다고 생각하였으나, 처음으로 Next.js를 활용해서 프로젝트를 진행하고 싶어 Next.js를 채택했습니다.

#### Recoil

비교적 간단한 구조로 상태관리를 할 수 있는 라이브러리 입니다. Hooks를 사용해서 데이터를 get/set 할 수 있고,
캐싱을 지원하여 동일 요청이 지속적으로 서버에 전달되는 것을 개선할 수 있습니다.

#### tailwindcss

이전 프로젝트에서는 직접 스타일을 작성해서 사용했지만, 이번에는 CSS 프레임워크를 도입하여 새로운 내용을 학습하고자했습니다. 별도의 CSS 파일을 관리할 필요가 없고 class명을 고민하지 않아도 되어서 학습 이후에는 빠르게 스타일을 적용할 수 있었습니다.

#### cypress

react-testing-library와 jest만을 테스팅 도구로 사용했었는데, 이번 프로젝트를 진행하면서 cypress를 도입해보았습니다. 실제 사용자의 인터렉션을 기반으로 동작을 모두 빠르고 쉽게 체크할 수 있다는 장점이 있습니다.

#### html-entities

HTML 특수문자를 디코드하기 위해 html-entities를 도입했습니다. 직접 구현을 해보려고 시도하다가 API에서 오는 문자의 범위가 넓어서 모든 문자에 대응하기 어려운 문제가 있었습니다.

#### Vercel

Vercel 서비스를 사용하여 배포하였습니다. [배포 사이트](https://quizquiz.vercel.app/)

<br>

## Challenge

#### 서버 사이드 렌더링 vs 클라이언트 사이드 렌더링

블로그와 같은 정적인 성격의 웹이 아닌 이 프로젝트와 같이 자주 데이터가 변경되는 웹이기 때문에 Next.js가 아닌 React가 더 적합하다고 생각했습니다. 하지만 Next.js로 프로젝트를 진행해보면서 Next.js에 대한 이해를 높이고자 했습니다. SEO 향상을 위한 meta 태그 설정과 오픈 그래프를 설정하여 엔진이 웹사이트를 조금 더 잘 분석할 수 있도록 작업해보았습니다. 배포된 웹사이트를 메신저에서 공유하면 아래와 같이 링크 미리보기를 지원합니다.  
<img width="240" alt="share_url" src="https://user-images.githubusercontent.com/54696956/185028886-a3c5a4dd-3ecf-4f5d-97df-31ea0edc7bf9.jpg">

#### Recoil

세 가지의 상황을 모두 처리하기 위해 Recoil을 사용하여 상태관리를 했습니다.

1. 사용자가 문항을 모두 완료한 후에 해당 문항을 다시 풀 수 있어야 합니다.
2. 사용자가 문항을 모두 완료한 후에 새로운 랜덤 문제를 풀 수 있어야 합니다.
3. 사용자가 문항을 모두 완료한 후에 오답 문항만을 리뷰할 수 있어야 합니다.

첫 번째 조건을 만족시키기 위해 Recoil의 캐싱을 활용해서 새로운 문제를 받아오지 않도록 구성했습니다. 만약 두 번째 상황이라면 Recoil에서 제공하는 `useRecoilRefresher_UNSTABLE` API를 사용하여 캐시를 지우고 새로운 요청을 발생시킬 수 있도록 구성했습니다. 그 외 문항과 관련된 상태(문항 리스트, 진행 상태) 그리고 사용자의 상태 정보(소요 시간, 정답, 오답 문항)를 각 컴포넌트끼리 공유할 수 있도록 관리했습니다. 또한, 상태를 사전에 정해둔 default 값으로 리셋하는 `useResetRecoilState` API가 있어서 퀴즈과 완료된 후 모든 상태를 초기화 해야할 때 간편하고 직관적으로 논리를 구성할 수 있었습니다.

#### tailwindcss

CSS 프레임워크를 처음 도입해보면서 장점과 단점을 모두 경험해볼 수 있었습니다. 처음에는 class 이름이나 기본적인 적용 방법에 대해 익숙해지기 위해 많은 시간이 소요되었지만, 프로젝트를 진행하면 할수록 CSS 파일을 별도로 관리하지 않아도 많은 기능을 제공해주기 때문에 시간이 단축되었다는 생각이들었습니다. CSS로 직접 설정하면 길게 나열해야되는 속성들을 간단한 class 이름으로 설정할 수 있었습니다. 반면, class 명을 분기 처리하거나 props로 받아온 값으로 동적 스타일링을 적용해야 하는 상황에서 매우 번거롭고 딜레이가 생겼습니다. 또한 모든 기능을 다 알고 있을 순 없으니 검색에 소요되는 시간도 고려해야 했습니다. 마지막으로 태그에 class 명을 계속 나열해서 사용하므로 코드가 길어지는 단점도 있었습니다. 이번 프로젝트를 통해서 장단점을 확실히 알 수 있었고, 앞으로 프로젝트 성격에 맞게 적용하면 좋겠다는 생각이 들었습니다.
