import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faVk,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

const SocialFollow = () => {
  const iconSize = { fontSize: 34 };
  return (
    <div className="contact-block__social-icons">
      <a href="#">
        <FontAwesomeIcon icon={faYoutube} style={iconSize} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} style={iconSize} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faVk} style={iconSize} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} style={iconSize} />
      </a>
    </div>
  );
};

export default SocialFollow;
