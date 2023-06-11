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
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
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
            color: darkTheme ? '#434343' : 'black',
            filter: darkTheme
              ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
              : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
            fontSize: '10em',
            marginBottom: '0rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            textAlign: 'center',
            textShadow: '2px 2px 2px indigo',
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
