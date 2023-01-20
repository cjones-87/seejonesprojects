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
              <h4>CJ JONES</h4>
            </div>

            <div className="business-card-title">
              <p>Software Engineer/Designer</p>
            </div>

            <div className="business-card-address">
              <p>Freelance - Remote</p>
            </div>

            <div className="business-card-address">
              <p>New York, NY</p>
            </div>

            <div className="business-card-phone-and-email">
              <p>(929)</p>
            </div>

            <div className="business-card-phone-and-email">
              <p>cj@seejonesengineer.com</p>
            </div>
          </div>
        </div>

        <div className="business-card-back">
          <div className="business-card-back-top">
            <img src={BackLogo} />
          </div>
          <div className="business-card-back-bottom">
            <a
              href="https://www.seejonesengineer.com/assets/CJsSoftwareEngineeringResume.24a34476.pdf#"
              target="_blank"
            >
              <i className="fa fa-file-pdf fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a
              href="mailto:cj@seejonesengineer.com"
              style={{ color: 'indigo', textDecoration: 'none' }}
              target="_blank"
            >
              <i className="fa fa-at fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a href="https://www.linkedin.com/in/cjones1827/" target="_blank">
              <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a
              href="https://www.instagram.com/seejonesengineer/"
              target="_blank"
            >
              <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a href="https://twitter.com/cjonesengineer1" target="_blank">
              <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw"
              target="_blank"
            >
              <i className="fa fa-youtube fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a href="https://www.tiktok.com/@seejonesengineer" target="_blank">
              <i className="fab fa-tiktok fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>

            <a
              href="https://www.facebook.com/seejonesengineer/"
              target="_blank"
            >
              <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
