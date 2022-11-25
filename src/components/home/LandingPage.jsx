import React from 'react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import LandingPageHeader from './LandingPageHeader';
import LandingPageFooter from './LandingPageFooter';

const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
