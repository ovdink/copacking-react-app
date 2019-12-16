import React from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

import '../../scss/_container.scss';
import './Footer.scss';
import mapArrow from '../../assets/icons/map-marker.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__contact-block contact-block">
          <div className="contact-block__title">контакты</div>
          <div className="contact-block__phones"></div>
          <div className="contact-block__adress"></div>
          <div className="contact-block__email"></div>
          <div className="contact-block__social-icons"></div>
        </div>
        <div className="footer__map-block">
          <Map
            height={325}
            width={700}
            onAPIAvailable={function() {
              console.log('API loaded');
            }}
            center={[55.664345060015314, 37.59796804148655]}
            zoom={16}
          >
            <Marker lat={55.664345060015314} lon={37.59796804148655}>
              <MarkerLayout>
                <div style={{ overflow: 'hidden' }}>
                  <img src={mapArrow} />
                </div>
              </MarkerLayout>
            </Marker>
          </Map>
        </div>
        <div className="footer__form-block"></div>
        <div className="footer__copyright"></div>
      </div>
    </div>
  );
};

export default Footer;
