const CACHE='oceannav-v9';
const MAP_CACHE='oceannav-map-v1';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE&&key!==MAP_CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const tile=url.hostname.endsWith('tile.openstreetmap.org');
 if(tile){event.respondWith(caches.open(MAP_CACHE).then(c=>c.match(event.request.url)).then(hit=>hit||fetch(event.request).then(r=>{caches.open(MAP_CACHE).then(c=>c.put(event.request.url,r.clone()));return r})).catch(()=>caches.match(event.request.url)));return}
 if(url.origin!==self.location.origin)return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));return response}).catch(()=>caches.match(event.request)));
});