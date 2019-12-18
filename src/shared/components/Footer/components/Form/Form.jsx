import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default class Form extends Component {
  render() {
    return (
      <>
        <input className="form-name" type="text" placeholder=" Имя *" />
        <br />
        <input className="form-email" type="email" placeholder=" E-mail *" />
        <br />
        <textarea
          className="form-message"
          cols="48"
          rows="8"
          placeholder="Сообщение"
        />
        <div className="form-btn-flex">
          <div className="form-recaptcha">
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
          </div>
          <button className="form-btn-send">отправить</button>
        </div>
      </>
    );
  }
}
