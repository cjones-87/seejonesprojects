import useTheme from '../../../misc/customHooks/useTheme';
import Typewriter from 'typewriter-effect';
import {
  MobileDevelopmentData,
  WebDevelopmentData,
} from './data/SpecializationData';

const Specialization = () => {
  const { darkMode } = useTheme();
  return (
    <div
      style={{
        color: darkMode ? '#ba68c8' : 'whitesmoke',
        fontSize: '1vmin',
        textShadow: '2px 2px 2px indigo',
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
          <a href={data.href} key={index} rel='noreferrer' target='_blank'>
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
        {MobileDevelopmentData.map((data, index) => (
          <a href={data.href} key={index} rel='noreferrer' target='_blank'>
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
