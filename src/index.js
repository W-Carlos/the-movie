import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);

