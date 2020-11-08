import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';
import NaviTop from 'components/NaviTop';
import Hero from 'components/Hero';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Partners from 'components/Partners';
import GlobalStyle from 'theme/GlobalStyle';
import ScrollUpButton from 'react-scroll-up-button';

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
            <ScrollUpButton />
            <CookieConsent
              location="bottom"
              buttonText="Wyrażam zgodę"
              cookieName="myAwesomeCookieName2"
              style={{ background: '#2B373B', width: '100%' }}
              buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
              expires={150}
            >
                   
              <span id="cookieSpan">
                 Nasz serwis, jak większość serwisów internetowych, wykorzystuje tzw. pliki cookies.
                Korzystanie z serwisu oznacza zgodę na ich zapis lub wykorzystanie. Więcej
                informacji można znaleźć w „Polityce prywatności”. Akceptuję{' '}
                <Link to="/cookies">"Politykę prywatności"</Link> i wykorzystania plików cookies w
                serwisie.
              </span>
                  
            </CookieConsent>
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
