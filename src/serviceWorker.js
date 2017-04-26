export function register({file}) {
  if(window.navigator.serviceWorker) {
    window.navigator.serviceWorker.register(file);
  }
}