import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Email = () => {
  return (
    <div className="contact-block__email">
      <div className="contact-block__email-icon">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </div>
      <div>info@elikon-design.ru</div>
    </div>
  );
};

export default Email;
