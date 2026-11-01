const CACHE='gvcn-3d-7d998f5587c3';
const CORE=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./assets/quiz.webp","./assets/tf.webp","./assets/short.webp","./assets/order.webp","./assets/match.webp","./assets/memory.webp","./assets/mystery.webp","./assets/race.webp","./assets/wheel.webp","./assets/draw.webp","./assets/groups.webp","./assets/bingo.webp","./assets/guess.webp","./assets/scramble.webp","./assets/dice.webp","./assets/fishing.webp","./assets/balloon.webp","./assets/bell.webp","./assets/treasure.webp","./audio/sparkle.mp3","./audio/journey.mp3"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gvcn-3d-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const req=event.request,url=new URL(req.url);if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));}return resp;}).catch(()=>caches.match('./index.html')));return;}
 event.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(resp=>{if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(req,copy));}return resp;})));
});
