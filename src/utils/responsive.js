import {actions} from '../state'
import debounce from './debounce'

export const Phone = 320
export const Tablet = 768
export const Desktop = 1024

const updateBreakpoint = debounce(actions.updateBreakpoint, 250)
window.onresize = () => updateBreakpoint
