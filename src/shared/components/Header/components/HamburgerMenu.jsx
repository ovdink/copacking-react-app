import React, { Component } from 'react';

export default class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleModalMenu(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
    this.props.onClickMenu(this.state.open);
    console.log(this.state.open);
  }

  render() {
    const { open } = this.state;
    return (
      <div
        className={`header__hamburger ${open ? `open` : null} `}
        onClick={(e) => this.toggleModalMenu(e)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
