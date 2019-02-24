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
    "url": "/_nuxt/4c9fc7eb3b0b8c1f724e.js",
    "revision": "45cd4143312cc318f09b17f65bc14096"
  },
  {
    "url": "/_nuxt/66c94fe547b48a6aaca4.js",
    "revision": "44115ffc27b653feadea3e091b8bd869"
  },
  {
    "url": "/_nuxt/ae8408ddb2ed773aaab7.js",
    "revision": "932cef5309a88bd3b1a1eb50ec3d9d4e"
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
