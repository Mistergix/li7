importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7ccf6e6a937938715047.js",
    "revision": "50242f82540bf1e52516e0f4d1498a32"
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
  },
  {
    "url": "/_nuxt/feca2374451dc0026178.js",
    "revision": "951fd075cbde5110a6ec1248304d153c"
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
