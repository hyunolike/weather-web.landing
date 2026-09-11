# 날씨의 속삭임 🌤️

> 서비스 `날씨의 속삭임` 렌딩페이지 입니다.

## 기술스택

<!--
<img width="841" alt="image" src="https://github.com/hyunolike/weather-web.landing/assets/61215550/aa4856c8-ddc0-4623-b7ce-f5644d7e33a8">
-->
<img width="841" alt="image" src="https://github.com/hyunolike/weather-web.landing/assets/61215550/8810f120-8425-4ffb-bd72-594e11d99d1c">

## CI/CD

<img width="1466" alt="image" src="https://github.com/hyunolike/weather-web.landing/assets/61215550/590908c2-509e-4314-97a6-9f551bb49ed4">

## 로컬 개발

```bash
pnpm install
cp .env.example .env   # POSTGRES_* 값을 채워주세요
pnpm prisma-deploy     # 마이그레이션 적용
pnpm dev
```

사전 신청(입장하기) 폼은 server action 에서 `SendList` 테이블에 저장됩니다.

- 이메일은 unique 제약으로 중복 신청을 막습니다.
- `SpamList` 에 등록된 이메일/IP 는 신청이 차단됩니다.
- 동일 IP 에서 1분 내 3회를 초과하면 신청이 제한됩니다.

## 개발자 🧑🏻‍💻

|                           FrontEnd                            |
| :-----------------------------------------------------------: |
| ![](https://avatars.githubusercontent.com/hyunolike?size=100) |
|            [장현호](https://github.com/hyunolike)             |
