import {connect} from '../wrappers'

const Header = ({
  appShell: {
    menu
  },
  mainMenu: {
    isOpen
  },
  toggleMenu
}) =>
  <div class='header'>
    <button class='hamburger__icon' onClick={() => toggleMenu()}>Menu</button>
    {isOpen && (
      <nav>
        <ul class='hamburger__menu'>
          {menu.map(m => <li><a href={m.url}>{m.name}</a></li>)}
        </ul>
      </nav>
    )}
  </div>

export default connect(state => ({
  mainMenu: state.mainMenu,
  appShell: state.appShell
}),
actions => ({
  toggleMenu: actions.toggleMenu
}))(Header)
