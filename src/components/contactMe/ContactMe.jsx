import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import BusinessCard from './BusinessCard';

const ContactMe = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        height: innerHeight,
        width: innerWidth,
      });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-2rem',
          textAlign: 'center',
        }}
      >
        <LazyLoadComponent>
          <BusinessCard />
        </LazyLoadComponent>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem',
          textAlign: 'center',
        }}
      >
        <Button
          label={
            <a
              href="https://formsubmit.co/el/wenabu/?next=https://www.seejonesengineer.com/"
              target="_blank"
            >
              Contact Me
            </a>
          }
          type="submit"
          action="https:formsubmit.co/el/wenabu"
          // action="https:formsubmit.co/ed8588bae0bd9d8669f5533fa84f2957"
          method="POST"
        />
      </div>
    </div>
  );
};

export default ContactMe;
