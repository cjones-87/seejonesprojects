import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import React from 'react';
import Pdf from '../../CJTechResume.pdf';
import './Resume.css';
export default function Resume() {
  return (
    <body className="bg-black-alpha-90" id="resumeBody">
      <div className="App" id="resumeDiv">
        <a href={Pdf} target="_blank" rel="noreferrer" id="resumeLink">
          <h1 style={{ color: 'rebeccapurple' }}>Download My Resumé</h1>
        </a>
      </div>
    </body>
  );
}
