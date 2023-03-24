import React from 'react';

import './404.css';
const PageNotFound404 = () => {
  return (
    <div id="FourOhFour">
      <div
        style={{
          color: 'rebeccapurple',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          left: '50%',
          textAlign: 'center',
          position: 'fixed',
          right: '50%',
          textShadow: '2px 2px 2px #01020E',
          top: '50%',
          transform: 'translate(-50%, -50%)',
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
