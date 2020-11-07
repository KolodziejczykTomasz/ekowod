import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import NaviTop from 'components/NaviTop';
import Hero from 'components/Hero';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Partners from 'components/Partners';
import GlobalStyle from 'theme/GlobalStyle';


import './HomeView.css';

const Box = styled.div`
  padding: 0 auto;
  max-width: 1250px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

class HomeView extends Component {
  state = {    
    contrastType: 'white',
    fontSizeChange: 14,
  };

  handleResetFontSize = () => {
    this.setState({
      fontSizeChange: 14,
    });
  };

  handleClick = () => {
    if (this.state.contrastType === 'yellow') {
      this.setState({
        contrastType: 'white',
      });
    } else {
      this.setState({
        contrastType: 'yellow',
      });
    }
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
    const { fontSizeChange, contrastType } = this.state;

    return (
      <>
        <GlobalStyle />

        <ThemeProvider theme={theme}>
          <Box
            activeColor={contrastType}
            style={{ fontSize: fontSizeChange, backgroundColor: contrastType }}
          >
            <Helmet activeColor={contrastType}>
              {contrastType === 'yellow' ? <style>{'html{ background-color:yellow}'}</style> : null}
            </Helmet>

            <NaviTop
              clickContrastFn={this.handleClick}
              growFontFn={this.handleGrowFontSize}
              shrinkFontFn={this.handleShrinkFontSize}
              resetFontFn={this.handleResetFontSize}
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
            <Hero
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
            <Main
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
            <Partners
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
            <Footer
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
          </Box>
        </ThemeProvider>
      </>
    );
  }
}
export default HomeView;
