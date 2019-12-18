import React, { Component } from 'react';

import './SlideMenu.scss';
import Contacts from '../Footer/components/Contacts';

const Anchors = () => {
  return (
    <>
      <a class="anchor-link" id="key" href="#">
        Под ключ
      </a>
      <br />
      <a class="anchor-link" id="operation" href="#">
        Простые операции
      </a>
      <br />
      <a class="anchor-link" id="about" href="#">
        О компании
      </a>
      <br />
      <a class="anchor-link" id="contact" href="#">
        Контакты
      </a>
    </>
  );
};

export default class SlideMenu extends Component {
  render() {
    return (
      <div className="scrim">
        <div className="slide-menu">
          <div className="slide-menu__container">
            <Anchors />
          </div>
        </div>
      </div>
    );
  }
}
