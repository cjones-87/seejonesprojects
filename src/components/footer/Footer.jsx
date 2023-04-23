import React, { useEffect, useState } from 'react';
import FooterContent from './FooterContentData';

const Footer = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });
    handleResize();

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  return (
    <div
      className="sticky bottom-0"
      id="footer"
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        width: dimensions.width,
      }}
    >
      <div
        style={{
          color:
            localStorage.getItem('lightMode') === 'true' ? '#ba68c8' : 'indigo',
          textShadow:
            localStorage.getItem('lightMode') === 'true'
              ? '1px 1px 1px #01020E'
              : '1px 1px 1px #f5f5f5',
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
                        ? '#ba68c8'
                        : 'indigo',
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
