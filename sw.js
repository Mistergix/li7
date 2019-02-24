importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/31db64008098c429a4e2.js",
    "revision": "9a3024cca35b6e692851f8682cdd4565"
  },
  {
    "url": "/_nuxt/353278eb3a305bb09388.js",
    "revision": "737865fd506f2180c0926be1738a47de"
  },
  {
    "url": "/_nuxt/ae3a921ffbb7b8b27120.js",
    "revision": "ed02f538b2359c18377b5a981270e78c"
  },
  {
    "url": "/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
  },
  {
    "url": "/_nuxt/b372c582c203defe7e88.js",
    "revision": "c414b2d67f8cc9aaacfee71e911b7d67"
  },
  {
    "url": "/_nuxt/fbf151781ce94448822c.js",
    "revision": "a12dad7ca333e31278327e520ce44d20"
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
