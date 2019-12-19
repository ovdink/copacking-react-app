import React, { Component } from 'react';

import './SlideMenu.scss';

const Anchors = () => {
  return (
    <>
      <a className="anchor-link" id="key" href="#">
        Под ключ
      </a>
      <br />
      <a className="anchor-link" id="operation" href="#">
        Простые операции
      </a>
      <br />
      <a className="anchor-link" id="about" href="#">
        О компании
      </a>
      <br />
      <a className="anchor-link" id="contact" href="#">
        Контакты
      </a>
    </>
  );
};

const SlideMenu = ({ openMenu }) => {
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
