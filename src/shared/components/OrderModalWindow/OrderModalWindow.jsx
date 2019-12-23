import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import './OrderModalWindow.scss';
import cross from '../../assets/icons/close.png';

const OrderModalWindow = ({ openOrderWindow, closeOrderWindow }) => {
  const onCloseOrderWindow = () => {
    closeOrderWindow(false);
  };

  return (
    <>
      <div
        className={`order-scrim ${openOrderWindow ? null : 'close'} `}
        onClick={onCloseOrderWindow}
      ></div>
      <div className={`order-window ${openOrderWindow ? null : 'close'}`}>
        <div className="order-window__close-cross">
          <img src={cross} alt="#" onClick={onCloseOrderWindow} />
        </div>
        <div className="order-window__title">Заказать проект</div>
        <input
          className="order-window__name"
          type="text"
          placeholder=" Имя *"
        />
        <br />
        <input
          className="order-window__email"
          type="email"
          placeholder=" E-mail *"
        />
        <br />
        <input
          className="order-window__company"
          type="text"
          placeholder=" Компания"
        />
        <br />
        <textarea
          className="order-window__message"
          cols="48"
          rows="8"
          placeholder="Сообщение"
        />
        <div className="order-window__recaptcha">
          <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
        </div>
        <button className="order-window__btn-send">отправить</button>
      </div>
    </>
  );
};

export default OrderModalWindow;
