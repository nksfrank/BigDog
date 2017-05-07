export const PHONE = 1
export const TABLET = 2
export const DESKTOP = 3

const getWindowSize = () => {
  const w = window
  const d = document
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  const size = w.innerWidth || e.clientWidth || g.clientWidth
  console.log(size)
  return size
}

const getBreakpoint = () => {}

export default {
  initialState: () => ({
    size: getWindowSize(),
    currentBreakpoint: getBreakpoint()
  }),
  responsiveUpdate: () => getWindowSize()
}
