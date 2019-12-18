import React from 'react';

import '../../scss/_container.scss';
import './Footer.scss';

import Contacts from './components/Contacts';
import Map from './components/Map';
import Form from './components/Form';
// import googleApiUrl from './components/Map';
// import googleApiKey from './components/Map';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer__contact-block">
            <Contacts />
          </div>
          <div className="footer__map-block">
            <Map />
          </div>
          <div className="footer__form-block">
            <Form />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="footer__copyright">
            <span>ELIKON DESIDN © 2019</span>
            <br />
            <a href="#"> специальная оценка условий труда</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
