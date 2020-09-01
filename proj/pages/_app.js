import React from 'react';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import theme from '../styles/theme';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          height: -webkit-fill-available;
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          height: 0px;
          width: 0px;
          background: transparent;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: '#ffffff';
        
          #page-wrap {
            text-align: center;
            overflow: auto;
          }
          
          .bm-item {
            display: inline-block;
            text-decoration: none;
            margin-bottom: 10px;
            color: #d1d1d1;
            transition: color 0.2s;
          }
          
          .bm-item:hover {
            color: white;
          }
          
          .bm-burger-button {
            position: fixed;
            width: 36px;
            height: 30px;
            left: 36px;
            top: 36px;
          }
          
          .bm-burger-bars {
            background: #373a47;
          }
          
          .bm-cross-button {
            height: 24px;
            width: 24px;
          }
          
          .bm-cross {
            background: #bdc3c7;
          }
          
          .bm-menu {
            background: #373a47;
            padding: 2.5em 1.5em 0;
            font-size: 1.15em;
          }
          
          .bm-morph-shape {
            fill: #373a47;
          }
          
          .bm-item-list {
            color: #b8b7ad;
          }
          
          .bm-overlay {
            background: rgba(0, 0, 0, 0.3);
          }
        }
      `}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ColorModeProvider>
  </ThemeProvider>
);

export default App;
