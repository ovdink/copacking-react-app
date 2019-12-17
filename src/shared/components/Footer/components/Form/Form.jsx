import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <>
        <input className="form-name" type="text" placeholder="Имя*" />
        <input className="form-email" type="email" placeholder="E-mail*" />
        <input className="form-message" type="text" placeholder="Сообщение*" />
      </>
    );
  }
}
