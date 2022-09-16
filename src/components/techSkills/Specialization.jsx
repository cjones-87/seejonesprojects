import React from 'react';

import { SiExpo } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa';

import Typewriter from 'typewriter-effect';

const Specialization = () => {
  return (
    <div
      style={{
        // position: 'relative',
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

        <big>
          <DiJavascript1 /> <FaReact /> <FaMobileAlt /> <SiExpo /> <FaNodeJs />
        </big>

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
        <big>
          <DiJavascript1 /> <FaReact /> <FaNodeJs />
        </big>

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
