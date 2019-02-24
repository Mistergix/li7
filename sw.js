importScripts('/li7/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/li7/_nuxt/0c076522c05dddc955c8.js",
    "revision": "d7ed9694e370f200bdf82e83a949b930"
  },
  {
    "url": "/li7/_nuxt/0f5b17f6a790f108b0d7.js",
    "revision": "84c80fc3ac24c49aa60ad3d508a6817b"
  },
  {
    "url": "/li7/_nuxt/7c7ce72a63211dfec5d1.js",
    "revision": "daf0b00d3a63625e2c4c2c8755e5d4c5"
  },
  {
    "url": "/li7/_nuxt/a57793cd59708d198f6d.js",
    "revision": "c4163275cb133035092202d20c054afb"
  },
  {
    "url": "/li7/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
  },
  {
    "url": "/li7/_nuxt/c5dbb58d2133c0d1818e.js",
    "revision": "61ea31eeccdae9a9c6919305b5aa36b4"
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
