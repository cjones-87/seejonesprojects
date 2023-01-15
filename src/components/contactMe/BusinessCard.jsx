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
        <div
          className="business-card-front"
          style={{
            background: `linear-gradient(100deg, #bebebe 40%, #663399 0)`,
          }}
        >
          <div className="business-card-left">
            <img
              src={CJTransparentBackground}
              style={{
                height: '250px',
                width: '550px',
                position: 'fixed',
              }}
            />

            <h4 style={{ marginLeft: '-15px' }}>
              Quality is &nbsp;<span>free</span>. &nbsp;But&nbsp;
              <span>only</span>&nbsp;to those who are&nbsp;<span>willing</span>
              &nbsp;to pay heavily for it.
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
      </div>
    </div>
  );
};

export default BusinessCard;
