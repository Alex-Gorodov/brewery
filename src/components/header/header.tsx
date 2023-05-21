import { useState } from 'react';
import cn from 'classnames';
import './header.sass';
import './navigation.sass';


function Header(): JSX.Element {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const menuClassName = cn('navigation header__nav', {
    'navigation--opened': isMenuOpened === true,
  });

  const togglerClassName = cn('header__toggler', {
    'header__toggler--opened': isMenuOpened === true,
  });

  return (
    <header className="header">
      <button className={togglerClassName} onClick={() => setMenuOpened(!isMenuOpened)}>
        <span></span>
      </button>
      <nav className={menuClassName}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">Shop</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">Beers</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">Events</a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;