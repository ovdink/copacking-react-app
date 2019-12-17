import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Phones = () => {
  return (
    <div className="contact-block__phones">
      <div className="contact-block__phones-icon">
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className="contact-block__phones-numbers">
        <a href="tel:+7 (499) 551-5402">+7 (499) 551-5402</a>
        <br />
        <a href="tel:+7 (499) 551-5403">+7 (499) 551-5403</a>
        <br />
        <a href="tel:+7 (499) 551-5404">+7 (499) 551-5404</a>
      </div>
    </div>
  );
};

export default Phones;
