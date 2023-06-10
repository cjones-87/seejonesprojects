import React, { useContext } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import BusinessCard from './BusinessCard';
import ContactForm from './ContactForm';

const ContactMe = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        width: '100vw',
      }}
    >
      <div
        style={{
          fontSize: '1vmin',
          marginTop: '-1.5rem',
        }}
      >
        <h1
          id="gradientText"
          style={{
            color: !darkTheme ? 'black' : '#434343',
            fontSize: '10em',
            marginBottom: '0rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            textShadow: !darkTheme
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
