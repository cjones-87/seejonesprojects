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
          localStorage.getItem('lightMode') === 'true' ? 'indigo' : '#ba68c8',
        fontSize: '1vmin',
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
      <h4 style={{ fontSize: '3em' }}>
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
      </h4>

      <div>
        {WebDevelopmentData.map((data, index) => (
          <a href={data.href} key={index} rel="noreferrer" target="_blank">
            <img
              alt={data.alt}
              key={index}
              src={data.src}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>

      <h4 style={{ fontSize: '3em' }}>
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
      </h4>

      <div>
        {' '}
        {MobileDevelopmentData.map((data, index) => (
          <a href={data.href} key={index} rel="noreferrer" target="_blank">
            <img
              alt={data.alt}
              key={index}
              src={data.src}
              style={{ height: '5em', width: '5em' }}
            />
          </a>
        ))}
      </div>

      <h4 style={{ fontSize: '3em' }}>
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
      </h4>
    </div>
  );
};

export default Specialization;
