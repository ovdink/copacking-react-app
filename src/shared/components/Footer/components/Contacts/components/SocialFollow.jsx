import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faVk,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

const SocialFollow = () => {
  return (
    <div className="contact-block__social-icons">
      <a href="#">
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faVk} size="3x" />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
    </div>
  );
};

export default SocialFollow;
