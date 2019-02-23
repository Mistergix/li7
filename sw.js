importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f5b17f6a790f108b0d7.js",
    "revision": "84c80fc3ac24c49aa60ad3d508a6817b"
  },
  {
    "url": "/_nuxt/2d955cf0a7cea33ffe7a.js",
    "revision": "f5cabd86df668ccee7b043c7237b65f0"
  },
  {
    "url": "/_nuxt/329ea8cb1520bb1db216.js",
    "revision": "1203a0d3465665ae4907f9a2be00a3bf"
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
    "url": "/_nuxt/be78b61bc86df67f2905.js",
    "revision": "abc34e08b8455dd7749d35f0dca735e8"
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
