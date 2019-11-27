import React, { Component } from 'react';

import AppHeader from '../App-header';
import VideoBlock from '../Video-block';
import TitleBlock from '../Title-block';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="elikon-app">
        <AppHeader />
        <VideoBlock />
        <TitleBlock />
      </div>
    );
  }
}
