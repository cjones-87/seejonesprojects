import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react';

export default function TechSkills() {
  return (
    <>
      <h4 align="center"> Languages </h4>
      <div align="center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />
        </a>
      </div>

      <h4 align="center"> Front-End </h4>
      <div align="center">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />
        </a>
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
            width="40"
            height="40"
          />
        </a>
        <a href="https://webpack.js.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
            alt="webpack"
            width="40"
            height="40"
          />
        </a>
      </div>
      <h4 align="center"> Back-End </h4>
      <div align="center">
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
          />
        </a>
        <a href="https://expressjs.com" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            width="40"
            height="40"
          />
        </a>
        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            width="40"
            height="40"
          />
        </a>
        <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
          <img
            src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
            alt="babel"
            width="40"
            height="40"
          />
        </a>
      </div>
    </>
  );
}
