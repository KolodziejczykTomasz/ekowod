import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { theme } from '../theme/theme';
import NaviTop from '../components/NaviTop';
import Jumbotron from '../components/Jumbotron';
import MainHydroGI from '../components/MainHydroGI';
import Footer from '../components/Footer';
import GlobalStyle from '../theme/GlobalStyle';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';
const Box = styled.div`
  padding: 0 auto;
  max-width: 1250px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
`;

class HydroGiView extends Component {
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
            <Jumbotron
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
            <MainHydroGI
              contrastType={`${this.state.contrastType}`}
              fontSizeChange={`${this.state.fontSizeChange}`}
            />
            <ScrollUpButton />
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
export default HydroGiView;
