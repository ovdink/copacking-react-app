import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Adress = () => {
  return (
    <div className="contact-block__adress">
      <div className="contact-block__adress-icon">
        <FontAwesomeIcon icon={faMapMarker} />
      </div>
      <div className="contact-block__adress-text">
        <span>117638, Москва,</span>
        <br />
        <span>ул. Одесская, 2, БЦ «Лотос»,</span>
        <br />
        <span>корпус С, 9 этаж</span>
      </div>
    </div>
  );
};

export default Adress;
