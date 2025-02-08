import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 4200, // ⚡ 실행 포트 고정
        strictPort: true // 다른 프로세스가 점유 중이면 실행되지 않도록 설정
    }
});
