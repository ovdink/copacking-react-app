import React, { Component } from 'react';

import AppHeader from 'common/components/App-header/App-header';
import VideoBlock from 'common/components/Video-block/Video-block';
import TitleBlock from 'common/components/Title-block/Title-block';
import FilterButtons from 'common/components/Filter-buttons/Filter-buttons';
import Grid from 'common/components/Grid/Grid';

import './App.scss';

import { titleData } from 'common/constants';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'all'
    };
  }

  onFilterChange = (id) => () => {
    this.setState({ selectedTab: id });
  };

  render() {
    return (
      <div className="elikon-app">
        <AppHeader />
        <VideoBlock />
        <TitleBlock titleData={titleData[0]} />
        <FilterButtons
          onFilterChangeId={this.onFilterChange}
          selectedTabId={this.state.selectedTab}
        />
        <Grid selectedCards={this.state.selectedTab} />
        <TitleBlock titleData={titleData[1]} />
      </div>
    );
  }
}
