export default function debounce(fn, wait, immediate) {
  let timeout
  return function debounced() {
    const delayed = () => {
      timeout = null
      if (!immediate) fn.apply(this, arguments)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(delayed, wait)
    if (callNow) fn.apply(this, arguments)
  }
}
