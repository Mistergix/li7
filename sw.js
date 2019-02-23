importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/342d6f971279c1136150.js",
    "revision": "fa7c684797fc516a250b6d944b9bad9c"
  },
  {
    "url": "/_nuxt/3e581d9af59adcc53b9f.js",
    "revision": "42b67ab8dd4a69666c70178c66205c6e"
  },
  {
    "url": "/_nuxt/5da913df51eb281634e2.js",
    "revision": "866a6900342ac9eeaa7c34020d65f4d3"
  },
  {
    "url": "/_nuxt/a2bd8469a007e36f4883.js",
    "revision": "1d37b83ad050f8ee805c1bee707d1a4e"
  },
  {
    "url": "/_nuxt/a6d93834d9583b734de1.js",
    "revision": "4f044a47a0626b833f2b569cc8b271f9"
  }
], {
  "cacheId": "client",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
