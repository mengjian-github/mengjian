import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: local('SF Pro Display');
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: local('SF Pro Text');
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <WeatherSearch />
    </>
  );
};

export default App;
