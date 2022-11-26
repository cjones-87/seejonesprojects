import React from 'react';

const Footer = (props) => {
  return (
    <div className="sticky bottom-0" id="footer">
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20 button'
            : 'bg-black-alpha-90 button'
        }
        style={{
          color: 'indigo',
          textShadow:
            localStorage.getItem('lightMode') === 'true'
              ? '1px 1px 1px #01020E'
              : '1px 1px 1px #f5f5f5',
          textAlign: 'center',
          marginTop: '2rem',
          paddingTop: '2rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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

          <a href="https://www.instagram.com/seejonesengineer/" target="_blank">
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

          <a href="https://www.facebook.com/seejonesengineer/" target="_blank">
            <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" />
          </a>
        </div>

        <h5
          className={
            localStorage.getItem('lightMode') === 'true'
              ? 'bg-black-alpha-20 card'
              : 'bg-black-alpha-90 card'
          }
        >
          © 2022 by CJ Jones
        </h5>
      </div>
    </div>
  );
};

export default Footer;
