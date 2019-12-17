import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Phones, Adress, SocialFollow } from './components';

const Contacts = () => {
  return (
    <>
      <div className="contact-block__title">контакты</div>
      <div className="contact-block__phones">
        <Phones />
      </div>
      <div className="contact-block__adress">
        <Adress />
      </div>
      <div className="contact-block__email">info@elikon-design.ru</div>
      <div className="contact-block__social-icons">
        <SocialFollow />
      </div>
    </>
  );
};

export default Contacts;
