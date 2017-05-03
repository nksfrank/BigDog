import {h} from 'preact'

export default ({
  appShell: {
    menu
  },
  mainMenu: {
    isOpen
  },
  actions: {
    toggleMenu
  }
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
