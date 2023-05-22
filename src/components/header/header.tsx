import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import './header.sass';
import './navigation.sass';
import { Navigation } from 'swiper';


function Header(): JSX.Element {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (menuRef.current && !evt.composedPath().includes(menuRef.current)) {
        setMenuOpened(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  const menuClassName = cn('navigation header__nav', {
    'navigation--opened': isMenuOpened === true,
  });

  const togglerClassName = cn('header__toggler', {
    'header__toggler--opened': isMenuOpened === true,
  });

  return (
    <header className="header">
      <button className={togglerClassName}  ref={menuRef} onClick={() => setMenuOpened(!isMenuOpened)}>
        <span></span>
      </button>
      <nav className={menuClassName}>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" target="_blank" className="navigation__link">Shop</a>
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