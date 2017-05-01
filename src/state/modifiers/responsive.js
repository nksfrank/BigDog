import { Phone, Tablet, Desktop } from '../../comp/shared';
import debounce from '../../utils/debounce';

const PHONE = 1;
const TABLET = 2;
const DESKTOP = 3;


const getWindowSize = () => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    size = w.innerWidth || e.clientWidth || g.clientWidth;
  console.log(size);
  return size;
};

const getBreakpoint = () => {}

export default {
  initialState: () => ({
    size: getWindowSize(),
    currentBreakpoint: getBreakpoint()
  }),
  responsiveUpdate: () => getwindowSize(),
}
