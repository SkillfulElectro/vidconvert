/*! coi-serviceworker v0.1.7 - Guido Zuidhof, MIT License */
let coi = {
  shouldRegister: () => true,
  shouldDeregister: () => false,
  coepCredentialless: () => true,
  doReload: () => true,
  quiet: false,
  ...window.coi
};

if (typeof window === 'undefined') {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  self.addEventListener('fetch', function (event) {
    const r = event.request;
    if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') {
      return;
    }

    const coep = coi.coepCredentialless() ? 'credentialless' : 'require-corp';

    event.respondWith(
      fetch(r)
        .then((response) => {
          if (response.status === 0) {
            return response;
          }

          const newHeaders = new Headers(response.headers);
          newHeaders.set('Cross-Origin-Embedder-Policy', coep);
          newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
          });
        })
        .catch((e) => console.error(e))
    );
  });
} else {
  (() => {
    const n = navigator;
    if (n.serviceWorker) {
      n.serviceWorker.getRegistration().then((registration) => {
        if (registration && coi.shouldDeregister()) {
          registration.unregister().then(() => {
            console.log('coi-serviceworker deregistered');
          });
        }
      });
    }

    if (!window.crossOriginIsolated && coi.shouldRegister()) {
      if (n.serviceWorker) {
        n.serviceWorker.register(window.document.currentScript.src).then(
          (registration) => {
            !coi.quiet && console.log('coi-serviceworker registered:', registration.scope);

            registration.addEventListener('updatefound', () => {
              !coi.quiet && console.log('coi-serviceworker reloading for cross-origin isolation');
              if (coi.doReload()) window.location.reload();
            });

            if (registration.active && !n.serviceWorker.controller) {
              !coi.quiet && console.log('coi-serviceworker reloading for cross-origin isolation');
              if (coi.doReload()) window.location.reload();
            }
          },
          (err) => {
            !coi.quiet && console.error('coi-serviceworker registration failed:', err);
          }
        );
      }
    }
  })();
}
