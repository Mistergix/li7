importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c076522c05dddc955c8.js",
    "revision": "d7ed9694e370f200bdf82e83a949b930"
  },
  {
    "url": "/_nuxt/0f5b17f6a790f108b0d7.js",
    "revision": "84c80fc3ac24c49aa60ad3d508a6817b"
  },
  {
    "url": "/_nuxt/315e8d3188a35be0cb18.js",
    "revision": "03613e0b9cd8397424b68f4b39164066"
  },
  {
    "url": "/_nuxt/9719f71712aadc13a73a.js",
    "revision": "714adcefe5e48789cf8898636a93a17c"
  },
  {
    "url": "/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
  },
  {
    "url": "/_nuxt/c5dbb58d2133c0d1818e.js",
    "revision": "61ea31eeccdae9a9c6919305b5aa36b4"
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
