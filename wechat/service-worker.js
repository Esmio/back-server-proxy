"use strict";var precacheConfig=[["/index.html","5324e923905036ae63309b275d624ac1"],["/static/css/main.6dc0c978.css","5bda8b488ca85167a9f53f7087bb164c"],["/static/js/main.64df47fd.js","1536747531e4f78c6579fa4dc1689ef3"],["/static/media/1@3x.121515ee.png","121515ee22686771a61a2a27ba922c74"],["/static/media/2@3x.724bc312.png","724bc312595b75562f17c2bb4f3cdc80"],["/static/media/3@3x.a372416f.png","a372416f719bfbed61a88e265eb72bdc"],["/static/media/4@3x.4c319c42.png","4c319c4274eb035f1e1f2a5c3bf40aa7"],["/static/media/5@3x.a544732f.png","a544732f292527167d367e87677320e0"],["/static/media/6@3x.d1a71a54.png","d1a71a5488225ec0540883ee42e8f103"],["/static/media/banner@2x.94c99b8c.png","94c99b8c37365bec42fd5c0c89786c81"],["/static/media/banner@3x.6d0b0961.png","6d0b096191f81cedf2665fa3c1faf0d9"],["/static/media/bg@3x.dd1af551.png","dd1af5514c9fc883f6e73e02c926483a"],["/static/media/members_bg@2x.b7132ba8.png","b7132ba853b1c99c147cc42367448c34"],["/static/media/members_bg@3x.94e30701.png","94e30701e8f70475546da5376906c39e"],["/static/media/members_header.212d784a.png","212d784a47de23318a59d4dc30d75260"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});