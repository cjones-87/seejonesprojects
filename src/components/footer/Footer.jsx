import { useContext } from 'react';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import FooterContentData from './data/FooterContentData';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();

  return (
    <div
      className="sticky bottom-0"
      id="footer"
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        width,
      }}
    >
      <div
        style={{
          color: darkTheme ? '#ba68c8' : 'whitesmoke',
          textShadow: '2px 2px 2px indigo',
          textAlign: 'center',
          paddingTop: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '1vmin',
            justifyContent: 'space-evenly',
          }}
        >
          {FooterContentData.map((item, index) => {
            return (
              <a key={index} href={item.href} target="_blank">
                <i
                  className={item.className}
                  style={{
                    color: darkTheme ? '#ba68c8' : 'white',
                    filter: darkTheme
                      ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
                      : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
                    fontSize: '5em',
                    textDecoration: 'none',
                  }}
                />
              </a>
            );
          })}
        </div>

        <h5
          style={{
            background: darkTheme
              ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
              : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
          }}
        >
          <span
            style={{
              filter: darkTheme
                ? 'drop-shadow(0px 2px 4px rgba(186, 104, 200, 1))'
                : 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
            }}
          >
            Designed & Built by CJ Jones <br></br> © 2021&nbsp;-&nbsp;
            {new Date().getFullYear()}
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
