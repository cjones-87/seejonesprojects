import React from 'react';
import FooterContent from './FooterContentData';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const Footer = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      className="sticky bottom-0"
      id="footer"
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        width,
      }}
    >
      <div
        style={{
          color:
            localStorage.getItem('lightMode') === 'true' ? 'indigo' : '#ba68c8',
          textShadow:
            localStorage.getItem('lightMode') === 'true'
              ? '1px 1px 1px indigo'
              : '1px 1px 1px black',
          textAlign: 'center',
          marginTop: '2rem',
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
          {FooterContent.map((item, index) => {
            return (
              <a key={index} href={item.href} target="_blank">
                <i
                  className={item.className}
                  style={{
                    color:
                      localStorage.getItem('lightMode') === 'true'
                        ? 'indigo'
                        : '#ba68c8',

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
            background:
              localStorage.getItem('lightMode') === 'true'
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          }}
        >
          Designed & Built by CJ Jones <br></br> © 2021&nbsp;-&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
