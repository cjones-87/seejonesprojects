import React from 'react';

import { Button } from 'primereact/button';

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div
          className="button bg-black-alpha-90"
          style={{
            color: 'rebeccapurple',
            textShadow: '2px 2px 2px #01020E',
            textAlign: 'center',
            paddingBottom: '.5rem',
          }}
        >
          <h5>© 2022 by CJ Jones</h5>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a
              href="https://www.seejonesengineer.com/assets/CJsSoftwareEngineeringResume.24a34476.pdf#"
              target="_blank"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/business-finance-vol-3-39/512/cv_resume_job_application-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a href="mailto:cj@seejonesengineer.com" target="_blank">
              <img
                src="https://cdn4.iconfinder.com/data/icons/buno-email/32/__email_send_message-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a href="https://www.linkedin.com/in/cjones1827/" target="_blank">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a
              href="https://www.instagram.com/seejonesengineer/"
              target="_blank"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a href="https://twitter.com/cjonesengineer1" target="_blank">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCIgDLvCc7d6pX1LrhgwLZMw"
              target="_blank"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a href="https://www.tiktok.com/@seejonesengineer" target="_blank">
              <img
                src="https://cdn0.iconfinder.com/data/icons/internet-2020/1080/tiktokgradient-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
            <a
              href="https://www.facebook.com/seejonesengineer/"
              target="_blank"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png"
                style={{ width: '5rem', height: '5rem' }}
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}
