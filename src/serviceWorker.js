(({
  version
}) => {
  self.addEventListener('install', (event) => {
    // event.waitUntil()
    console.log(`Installed ${version} at `, new Date().toLocaleTimeString())
    self.skipWaiting()
  })

  self.addEventListener('activate', (event) => {
    // event.waitUntil()
    console.log(`Activate ${version} at `, new Date().toLocaleTimeString())
  })

  self.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
      event.respondWith(new Response('<h1>Offline :(</h1>', {headers: {'Content-Type': 'text/html'}}))
      return
    }
    console.log(event.request.url)
    event.respondWith(fetch(event.request))
  })
})({version: 2})
