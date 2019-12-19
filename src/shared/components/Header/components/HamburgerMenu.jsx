import React, { Component } from 'react';

export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleModalMenu() {
    const newState = !this.state.open;
    this.setState({
      open: newState
    });
    this.props.onClickMenu(newState);
  }

  render() {
    const { open } = this.state;
    return (
      <div
        className={`header__hamburger ${open ? `open` : null} `}
        onClick={() => this.toggleModalMenu()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
