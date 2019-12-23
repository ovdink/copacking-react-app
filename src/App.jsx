import React, { Component } from 'react';
import './App.scss';
import {
  Header,
  SlideMenu,
  OrderModalWindow,
  FilterButtons,
  Grid,
  TitleBlock,
  VideoBlock,
  About,
  Footer
} from './shared/components';

import { titleData, cardsKeys, cardsOperations } from './shared/constants';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'all',
      openMenu: false,
      openOrderWindow: false
    };
  }

  onFilterChange = (id) => () => {
    this.setState({ selectedTab: id });
  };

  onVisibleMenu = (show) => {
    this.setState({ openMenu: show });
  };

  onVisibleOrderWindow = (show) => {
    this.setState({ openOrderWindow: show });
  };

  render() {
    return (
      <div className="elikon-app">
        <Header
          onVisibleMenu={this.onVisibleMenu}
          onVisibleOrderWindow={this.onVisibleOrderWindow}
        />
        <SlideMenu
          openMenu={this.state.openMenu}
          // closeOnScrim={this.onVisibleMenu}
        />
        <OrderModalWindow
          openOrderWindow={this.state.openOrderWindow}
          closeOrderWindow={this.onVisibleOrderWindow}
        />
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
