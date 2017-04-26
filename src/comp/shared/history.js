export function back() {
  window.history.back();
}

export function forward() {
  window.history.forward();
}

export function go(num) {
  window.history.go(num);
}
export function pushState(url, state = null, title = null) {
  window.history.pushState(state, title, url);
}

export function replaceState(url, state = null, title = null) {
  window.history.replaceState(state, title, url);
}

export function state() {
  return window.history.state;
}