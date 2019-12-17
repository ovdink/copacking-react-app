import React from 'react';

import { Phones, Adress, SocialFollow, Email } from './components';

const Contacts = () => {
  return (
    <>
      <div className="contact-block__title">контакты</div>
      <Phones />

      <Adress />

      <Email />

      <SocialFollow />
    </>
  );
};

export default Contacts;
