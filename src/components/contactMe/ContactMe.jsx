import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import BusinessCard from './BusinessCard';
import ContactForm from './ContactForm';

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
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20 App card'
          : 'bg-black-alpha-90 App card'
      }
    >
      <div>
        <LazyLoadComponent>
          <ContactForm />
        </LazyLoadComponent>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <LazyLoadComponent>
          <BusinessCard />
        </LazyLoadComponent>
      </div>
    </div>
  );
};

export default ContactMe;
