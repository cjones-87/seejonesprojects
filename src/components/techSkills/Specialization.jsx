import React from 'react';

import { SiExpo } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import Typewriter from 'typewriter-effect';

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
      <p style={{ fontSize: '1.25em' }}>
        <big>
          <b>
            <Typewriter
              options={{
                strings: 'I specialize in',
                autoStart: true,
                loop: false,
              }}
            />
          </b>
        </big>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
        </a>
        <big>
          <b>
            <Typewriter
              options={{
                strings: 'for mobile development & ',
                autoStart: true,
                loop: false,
              }}
            />
          </b>
        </big>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />
        </a>
        <a href="https://docs.expo.dev/" target="_blank" rel="noreferrer">
          <img
            src="https://i.imgur.com/LNiblbi.png"
            alt="react native expo"
            width="40"
            height="40"
          />
        </a>
        &nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
        </a>
        <big>
          <b>
            <Typewriter
              options={{
                strings: 'for web development',
                autoStart: true,
                loop: false,
              }}
            />
          </b>
        </big>
      </p>
    </div>
  );
};

export default Specialization;
