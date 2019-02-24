importScripts('/li7/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/li7/_nuxt/31db64008098c429a4e2.js",
    "revision": "9a3024cca35b6e692851f8682cdd4565"
  },
  {
    "url": "/li7/_nuxt/353278eb3a305bb09388.js",
    "revision": "737865fd506f2180c0926be1738a47de"
  },
  {
    "url": "/li7/_nuxt/58317a98cd0aea6def31.js",
    "revision": "5c778a887039289c58ca07c4b4e5303e"
  },
  {
    "url": "/li7/_nuxt/8a96038b5fd5c4fce92d.js",
    "revision": "b3fa56a723d88d97b93377b5a083040a"
  },
  {
    "url": "/li7/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
  },
  {
    "url": "/li7/_nuxt/c6c6ab911f07db276595.js",
    "revision": "19f56f8632a56bd634b9fb433f72b70e"
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
