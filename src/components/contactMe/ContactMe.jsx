import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import BusinessCard from './BusinessCard';
import ContactForm from './ContactForm';

const ContactMe = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div style={{ width }}>
      <div
        style={{
          background:
            localStorage.getItem('lightMode') === 'true'
              ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
              : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          fontSize: '1vmin',
          marginTop: '-1.5rem',
        }}
      >
        <h1
          id="gradientText"
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'black'
                : '#434343',
            fontSize: '10em',
            marginBottom: '0rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            textShadow:
              localStorage.getItem('lightMode') === 'true'
                ? '1px 1px 1px indigo'
                : '1px 1px 1px whitesmoke',
          }}
        >
          Hire Me
        </h1>
      </div>

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
