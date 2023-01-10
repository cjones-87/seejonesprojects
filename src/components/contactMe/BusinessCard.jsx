import React, { useEffect, useState } from 'react';

import { CJTransparentBackground } from '../../photos/PhotoExports';

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
          <img
            src={CJTransparentBackground}
            style={{
              height: '300px',
              width: '550px',
              position: 'fixed',
              // zIndex: 0,
            }}
          />
          <div className="business-card-left" style={{ marginTop: ' -3rem' }}>
            {/* <img
            src={CJTransparentBackground}
            style={{
              height: '300px',
              width: '550px',
              position: 'fixed',
              // zIndex: 0,
            }}
          /> */}
            <h4 style={{ marginTop: '7.5rem', marginLeft: 5 }}>
              A program is only as <span>good</span>, as it is{' '}
              <span>useful</span>.
            </h4>

            <div className="business-card-address">
              <p>Freelance - Remote</p>
              <p>New York, NY</p>
            </div>
          </div>

          <div className="business-card-right">
            <div className="business-card-person">
              <div>
                <h4>CJ Jones</h4>
                <p>Frontend & Fullstack Software Engineer</p>
              </div>
            </div>

            <div className="business-card-phone-and-email">
              <p>(929)</p>
              <p>cj@seejonesengineer.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
