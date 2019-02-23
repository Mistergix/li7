importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16ee07a2091f010f87fe.js",
    "revision": "fb6a7f569ff20d6e539534e469e7401a"
  },
  {
    "url": "/_nuxt/677b745d809fcaaf58a4.js",
    "revision": "0511dd4f0de18c5f6c3d31112e0e76c1"
  },
  {
    "url": "/_nuxt/8947a6ab9fb33453a77f.js",
    "revision": "49d423a883231cffa0997fe4c0365467"
  },
  {
    "url": "/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
  },
  {
    "url": "/_nuxt/eb5017bef59d67c896ed.js",
    "revision": "659c426e234b8f186f856999276e05cb"
  },
  {
    "url": "/_nuxt/fbd5f5f9ede7d75a790c.js",
    "revision": "26149bbf4b6e7c97a0afa4313643997c"
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
