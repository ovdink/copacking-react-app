import React from 'react';

import '../../scss/_container.scss';
import './Footer.scss';

import Contacts from './components/Contacts';
import WrappedMap from './components/Map';
import Form from './components/Form';
// import googleApiUrl from './components/Map';
// import googleApiKey from './components/Map';

const googleApiUrl =
  'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=';
const googleApiKey = 'AIzaSyCxPeeTRCWUADyEmwwAaDHUIITmgQiR61w';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer__contact-block">
            <Contacts />
          </div>
          <div className="footer__map-block">
            <WrappedMap
              googleMapURL={googleApiUrl + googleApiKey}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <div className="footer__form-block">
            <Form />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer__copyright"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
