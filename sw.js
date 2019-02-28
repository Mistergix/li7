importScripts('/li7/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/li7/_nuxt/15ed076dd51c8882dbdb.js",
    "revision": "ee6ff51e6b56316133b88eaefdcd6af8"
  },
  {
    "url": "/li7/_nuxt/3f806e33f78ccfebce31.js",
    "revision": "632b9837dcbdb50b6f007f70e73bbc3e"
  },
  {
    "url": "/li7/_nuxt/6c2cb83870a97ad22af7.js",
    "revision": "a8a3663fe4097d8d24e9cc5885d089c1"
  },
  {
    "url": "/li7/_nuxt/741cdd19120f35315311.js",
    "revision": "e44aa30e24f11e74d577359dd94b5600"
  },
  {
    "url": "/li7/_nuxt/7f7ef82be8d91487dac7.js",
    "revision": "0bc840beba7c4a2fc71c2ad73f4d838d"
  },
  {
    "url": "/li7/_nuxt/f285c4825720624df838.js",
    "revision": "641b50eb95c5d6975b2c82f79b3e8b5d"
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
