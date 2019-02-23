importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0522458a4fb6a037848f.js",
    "revision": "dcb897636248b01505e03ad2f9f6f8c8"
  },
  {
    "url": "/_nuxt/1faeda4e543b326a5a8f.js",
    "revision": "7415aaceb96d6480e9fc91ee2c71d201"
  },
  {
    "url": "/_nuxt/78bbcd0a8995b70dc277.js",
    "revision": "f5a27b6cf84fd3fa130be624d728800c"
  },
  {
    "url": "/_nuxt/78e756e0d8957021e66b.js",
    "revision": "696e50933299547d3de733e63a51dcc3"
  },
  {
    "url": "/_nuxt/91fc5a390d7698923f9c.js",
    "revision": "5323186f3f8114e2f941e4f68dfd0c74"
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
