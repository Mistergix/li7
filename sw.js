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
    "url": "/li7/_nuxt/4f83f2b2a78a4dd52240.js",
    "revision": "5e5a3fe037b682d69ccfb11ba5c02c68"
  },
  {
    "url": "/li7/_nuxt/5c3170a2b0cceb517803.js",
    "revision": "b855aef406aa3352d74c86815938a763"
  },
  {
    "url": "/li7/_nuxt/a57793cd59708d198f6d.js",
    "revision": "c4163275cb133035092202d20c054afb"
  },
  {
    "url": "/li7/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
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
