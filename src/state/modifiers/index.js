import {combineModifiers} from 'dedux'
import mainMenu from './mainMenu'
import responsive from './responsive'
import blockActions from './blockActions'

export default combineModifiers({
  mainMenu,
  responsive,
  blockActions
})
