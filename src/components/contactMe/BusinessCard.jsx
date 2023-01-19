import React, { useEffect, useState } from 'react';

import { CJTransparentBackground } from '../../photos/PhotoExports';

import BackLogo from '../../photos/favicon.png';

const BusinessCard = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  return (
    <div className="business-card-container">
      <div className="business-card">
        <div className="business-card-front">
          <div className="business-card-left">
            <img
              src={CJTransparentBackground}
              style={{
                height: '250px',
                width: '550px',
                position: 'fixed',
              }}
            />

            <h4>
              Software engineering is an&nbsp;<span>artform</span>. You can
              have&nbsp;
              <span>good, fast, & cheap</span>&nbsp;. But only&nbsp;
              <span>two</span>
              &nbsp;of those.
            </h4>
          </div>

          <div className="business-card-right">
            <div className="business-card-person">
              <h4>CJ Jones</h4>
            </div>

            <div className="business-card-person">
              <p>Software Engineer/Designer</p>
            </div>

            <div className="business-card-phone-and-email">
              <p>(929)</p>
              <p>cj@seejonesengineer.com</p>
            </div>

            <div className="business-card-address">
              <p>Freelance - Remote</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        <div className="business-card-back">
          <div className="business-card-back-left">
            <img
              src={BackLogo}
              style={{
                height: '250px',
                width: '550px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
