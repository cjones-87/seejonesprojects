import React from 'react';
import Typewriter from 'typewriter-effect';
import {
  MobileDevelopmentData,
  WebDevelopmentData,
} from './SpecializationData';

const Specialization = () => {
  return (
    <div
      style={{
        color:
          localStorage.getItem('lightMode') === 'true' ? 'indigo' : 'white',
        textShadow:
          localStorage.getItem('lightMode') === 'true'
            ? '1px 1px 1px whitesmoke'
            : '1px 1px 1px indigo',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
      }}
    >
      <div style={{ fontSize: '1.25em' }}>
        <big>
          <b>
            <Typewriter
              options={{
                autoStart: true,
                cursor: '',
                loop: false,
                strings: 'I specialize in',
              }}
            />
          </b>
        </big>

        {WebDevelopmentData.map((data, index) => (
          <a href={data.href} key={index} rel="noreferrer" target="_blank">
            <img
              alt={data.alt}
              height="40"
              key={index}
              src={data.src}
              width="40"
            />
          </a>
        ))}

        <big>
          <b>
            <Typewriter
              options={{
                autoStart: true,
                cursor: '',
                loop: false,
                strings: 'for web development & ',
              }}
            />
          </b>
        </big>

        {MobileDevelopmentData.map((data, index) => (
          <a href={data.href} key={index} rel="noreferrer" target="_blank">
            <img
              alt={data.alt}
              height="40"
              key={index}
              src={data.src}
              width="40"
            />
          </a>
        ))}

        <big>
          <b>
            <Typewriter
              options={{
                autoStart: true,
                cursor: '',
                loop: false,
                strings: 'for mobile development',
              }}
            />
          </b>
        </big>
      </div>
    </div>
  );
};

export default Specialization;
