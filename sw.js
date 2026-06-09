// Lift Log — Service Worker
// Caches the app shell and Google Fonts so the app works fully offline.
//
// ⚠️  Bump CACHE on every deploy of lift_log.html (v1 → v2 → v3 …).
//     The browser only notices a new SW when sw.js bytes change, and changing
//     the version string is the standard way to force a re-install + cache refresh.
const CACHE = 'liftlog-v3';

// ── INSTALL: pre-cache the app HTML ─────────────────────────────────────────
self.addEventListener('install', e => {
  const appUrl = new URL('lift_log.html', self.registration.scope).href;
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.add(new Request(appUrl, { cache: 'reload' })))
      .then(() => self.skipWaiting())   // activate immediately, don't wait for old SW to die
  );
});

// ── ACTIVATE: clean up old cache versions ────────────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => clients.claim())      // take control of all open tabs immediately
  );
});

// ── FETCH: cache-first for app + fonts, pass through everything else ─────────
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = new URL(e.request.url);
  const isApp  = url.pathname.endsWith('lift_log.html') || url.pathname === '/';
  const isFont = url.hostname.includes('fonts.gstatic.com') ||
                 url.hostname.includes('fonts.googleapis.com');

  // Only intercept requests we care about; let everything else through untouched
  if (!isApp && !isFont) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;

      // Not in cache yet — fetch it and store it for next time
      return fetch(e.request).then(res => {
        if (res.ok) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => {
        // Network failed and nothing in cache: return the app HTML as fallback
        // (harmless for font requests; correct behaviour for the HTML itself)
        return caches.match(new URL('lift_log.html', self.registration.scope).href);
      });
    })
  );
});
