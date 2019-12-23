import React from 'react';

import HamburgerMenu from './components/HamburgerMenu';

import logo from '../../assets/icons/header__logo.png';
import orderProject from '../../assets/icons/order-project.png';
import './Header.scss';

const Header = ({ onVisibleMenu, onVisibleOrderWindow }) => {
  const eventShowWindow = () => {
    onVisibleOrderWindow(true);
  };

  return (
    <header className="header">
      <HamburgerMenu onClickMenu={onVisibleMenu} />
      <div className="header__logo">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="header__order-project" onClick={eventShowWindow}>
        <img src={orderProject} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
