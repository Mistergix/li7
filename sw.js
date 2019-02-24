importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f5b17f6a790f108b0d7.js",
    "revision": "84c80fc3ac24c49aa60ad3d508a6817b"
  },
  {
    "url": "/_nuxt/1e472e620dd1fac918f1.js",
    "revision": "0c5ff5bae665210abca4418ac5352d7a"
  },
  {
    "url": "/_nuxt/385f997a784fb720db81.js",
    "revision": "62967bc0f9a672a39e725aa9d2e7995c"
  },
  {
    "url": "/_nuxt/3e78e10e4fb60988cde3.js",
    "revision": "6f06210df4016d84ee9d70c396f93bde"
  },
  {
    "url": "/_nuxt/8947a6ab9fb33453a77f.js",
    "revision": "49d423a883231cffa0997fe4c0365467"
  },
  {
    "url": "/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
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
