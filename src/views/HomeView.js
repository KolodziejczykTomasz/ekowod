import React, { Component } from 'react';
import styled from 'styled-components';
import NaviTop from 'components/NaviTop';
import Hero from 'components/Hero';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Partners from 'components/Partners';
import GlobalStyle from 'theme/GlobalStyle';

import './HomeView.css';

const Box = styled.div``;

class HomeView extends Component {
  state = {
    contrast: false,
    fontSizeChange: 14,
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 14,
    });
  };

  handleClick = () => {
    this.setState({
      contrast: !this.state.contrast,
    });
  };

  handleGrowFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange + number,
    });
  };

  handleShrinkFontSize = () => {
    const number = 1;
    this.setState({
      fontSizeChange: this.state.fontSizeChange - number,
    });
  };

  render() {
    const { fontSizeChange } = this.state;

    return (
      <Box
        className={this.state.contrast ? 'contrastTrue' : 'contrastFalse'}
        style={{ fontSize: fontSizeChange }}
      >
        <GlobalStyle />
        <NaviTop
          clickContrastFn={this.handleClick}
          growFontFn={this.handleGrowFontSize}
          shrinkFontFn={this.handleShrinkFontSize}
          resetFontFn={this.handleResetFontSize}
        />
        <Hero />
        <Main />
        <Partners />
        <Footer />
      </Box>
    );
  }
}
export default HomeView;
