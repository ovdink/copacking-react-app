import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './SlideMenu.scss';

const Anchors = () => {
  return (
    <>
      <AnchorLink offset="260" className="anchor-link" href="#key">
        Под ключ
      </AnchorLink>
      <AnchorLink offset="260" className="anchor-link" href="#key">
        Простые операции
      </AnchorLink>
      <AnchorLink offset="64" className="anchor-link" href="#about">
        О компании
      </AnchorLink>
      <AnchorLink offset="64" className="anchor-link" href="#contact">
        Контакты
      </AnchorLink>
    </>
  );
};

const SlideMenu = ({ openMenu, closeOnScrim }) => {
  return (
    <>
      <div className={`scrim ${!openMenu ? `scrim_close` : null}`}></div>
      <div className={`slide-menu ${!openMenu ? `slide-menu_close` : null}`}>
        <div className="slide-menu__container">
          <Anchors />
        </div>
      </div>
    </>
  );
};
export default SlideMenu;
