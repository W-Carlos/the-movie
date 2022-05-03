import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesMovie from './routes'
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RoutesMovie />
    <GlobalStyle />
  </>
);

