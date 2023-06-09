import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LightDarkThemeContext from '../misc/context/LightDarkThemeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <LightDarkThemeContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LightDarkThemeContext>
  </React.StrictMode>,
  document.getElementById('root')
);
