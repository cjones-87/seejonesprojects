import React from 'react';

import './404.css';
const PageNotFound404 = () => {
  return (
    <div id="FourOhFour">
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          padding: '30vh',
          color: 'rebeccapurple',
          textShadow: '2px 2px 2px #01020E',
        }}
      >
        <h1>404</h1>
        <h2>Page Not Found!</h2>
        <h3>WHOOPS! Looks Like You Accessed This Page By Mistake!</h3>
      </div>
    </div>
  );
};

export default PageNotFound404;
