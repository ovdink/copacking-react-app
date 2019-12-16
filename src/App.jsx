import React, { Component } from 'react';
import './App.scss';
import {
  AppHeader,
  FilterButtons,
  Grid,
  TitleBlock,
  VideoBlock
} from './shared/components';
import About from './shared/components/About';
import Footer from './shared/components/Footer';
import { titleData, cardsKeys, cardsOperations } from './shared/constants';

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
        <Grid selectedCards={this.state.selectedTab} cards={cardsKeys} />
        <TitleBlock titleData={titleData[1]} />
        <Grid selectedCards={this.state.selectedTab} cards={cardsOperations} />
        <About />
        <Footer />
      </div>
    );
  }
}
