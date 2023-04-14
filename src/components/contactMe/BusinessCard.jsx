import React, { useEffect, useState } from 'react';
import { CJTransparentBackground } from '../../photos/PhotoExports';
import footerContent from '../footer/FooterContentData';
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
    <iframe
      height={dimensions.height / 2}
      scrolling="no"
      src="https://3d-business-card.vercel.app/"
      style={{ border: 0 }}
      width={dimensions.width}
    />
  );
};

export default BusinessCard;
