// sw.js (Service Worker)
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // 당장 오프라인 캐싱을 안 하더라도 이 fetch 이벤트 리스너가 있어야 PWA 설치 조건이 충족됩니다.
});