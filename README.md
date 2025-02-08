# 🚀 NestJS + Lit 모노레포 (PNPM 기반)
이 프로젝트는 **NestJS(API)**와 **Lit(Vite 기반 Web Components)**를 **PNPM 모노레포**로 관리하는 구조입니다.

## 📁 프로젝트 구조
```
my-monorepo/
├── apps/
│   ├── api/       # NestJS 백엔드
│   ├── web/       # Lit (Vite) 프론트엔드
├── package.json   # 전체 프로젝트 관리
├── pnpm-workspace.yaml  # PNPM 모노레포 설정
├── .gitignore     # 루트에서만 관리
└── README.md      # 프로젝트 설명
```
---

## ✅ 1. 프로젝트 설치

### 1️⃣ **PNPM 설치 (없다면)**
```
npm install -g pnpm
```

### 2️⃣ **모노레포 전체 의존성 설치**
pnpm install
📌 `apps/api`와 `apps/web`의 `node_modules`가 자동으로 설치됩니다.

---

## ✅ 2. 프로젝트 실행

### 1️⃣ **전체 실행 (`api` + `web`)**
pnpm run dev

- **API (NestJS)** → `http://localhost:3000`
- **Web (Lit)** → `http://localhost:3001`

### 2️⃣ **개별 실행**
- **NestJS (`api`)만 실행**
  pnpm api:dev

- **Lit (`web`)만 실행**
  pnpm web:dev

---

## ✅ 3. 프로젝트 설정

### 📌 `pnpm-workspace.yaml` (모노레포 설정)
```
packages:
  - "apps/*"
```

📌 `apps/` 내부의 모든 프로젝트(`api`, `web`)를 자동으로 관리합니다.

### 📌 루트 `package.json` (스크립트)
```
{
  "scripts": {
    "dev": "pnpm --stream --filter=api --filter=web run dev",
    "build": "pnpm --filter=api --filter=web run build",
    "api:dev": "pnpm --filter=api run dev",
    "web:dev": "pnpm --filter=web run dev"
  }
}
```

### 📌 Vite 실행 포트 고정 (`apps/web/vite.config.ts`)
```
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4200, Web 실행 포트
    strictPort: true
  }
});
```

📌 `http://localhost:4200`에서 항상 실행되도록 포트를 고정했습니다.

---

## 🚀 4. 빌드 & 배포

### 1️⃣ **전체 빌드**
pnpm run build

📌 `dist/apps/api` 및 `dist/apps/web` 폴더가 생성됩니다.

### 2️⃣ **개별 빌드**
```
pnpm api:build
pnpm web:build
```

---

## 🎯 5. 추가 기능 (향후 개선 가능)
✅ **Docker 지원 추가**
✅ **공통 라이브러리 (`libs/`) 생성**
✅ **CI/CD 파이프라인 설정**
