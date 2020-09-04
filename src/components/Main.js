import React, { Component } from 'react';
import 'components/Main.css';
import AsideItem from 'components/AsideItem';
import MainItem from './MainItem';

class Main extends Component {
  render() {
    return (
      <div className="wrapper container">
        <div className="asideSection ">
          <AsideItem>AsideItem 1</AsideItem>
          <AsideItem>AsideItem 2</AsideItem>
          <AsideItem>AsideItem 3</AsideItem>
        </div>
        <div className="mainContainer">
          <MainItem>
            <h1 class="title">Section</h1>
            <h2 class="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one
              you're currently reading
            </h2>
          </MainItem>
          <MainItem>
            <h1 class="title">Section</h1>
            <h2 class="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one
              you're currently reading
            </h2>
          </MainItem>
        </div>
      </div>
    );
  }
}

export default Main;
