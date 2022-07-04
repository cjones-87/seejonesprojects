import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react';

import Pdf from '../../CJs - SWE - Resume.pdf';
import './Resume.css';

import Typewriter from 'typewriter-effect';

export default function Resume() {
  return (
    <body className="bg-black-alpha-90" id="resumeBody">
      <div className="App" id="resumeDiv">
        <a href={Pdf} target="_blank" rel="noreferrer" id="resumeLink">
          <h1 style={{ color: 'rebeccapurple' }}>
            <Typewriter
              options={{
                strings: ['Click Here To', 'Download My Resumé'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </a>
      </div>
    </body>
  );
}
