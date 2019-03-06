importScripts('/li7/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/li7/_nuxt/0ddaeaf71f542cd240e8.js",
    "revision": "05c4d19b97bdeb92be82941da7e07fa7"
  },
  {
    "url": "/li7/_nuxt/15ed076dd51c8882dbdb.js",
    "revision": "ee6ff51e6b56316133b88eaefdcd6af8"
  },
  {
    "url": "/li7/_nuxt/3f806e33f78ccfebce31.js",
    "revision": "632b9837dcbdb50b6f007f70e73bbc3e"
  },
  {
    "url": "/li7/_nuxt/6a21a698871621af3194.js",
    "revision": "d298632f3dcd8ed7550fca8f7a907e46"
  },
  {
    "url": "/li7/_nuxt/6c2cb83870a97ad22af7.js",
    "revision": "a8a3663fe4097d8d24e9cc5885d089c1"
  },
  {
    "url": "/li7/_nuxt/741cdd19120f35315311.js",
    "revision": "e44aa30e24f11e74d577359dd94b5600"
  }
], {
  "cacheId": "client",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/li7/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/li7/.*'), workbox.strategies.networkFirst({}), 'GET')
