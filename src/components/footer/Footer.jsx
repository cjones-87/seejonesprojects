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
      style={{ width: dimensions.width }}
    >
      <div
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20 button'
            : 'bg-black-alpha-90 button'
        }
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
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
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
                    textDecoration: 'none',
                  }}
                />
              </a>
            );
          })}
        </div>

        <h5
          className={
            localStorage.getItem('lightMode') === 'true'
              ? 'bg-black-alpha-20 card'
              : 'bg-black-alpha-90 card'
          }
        >
          Designed & Built by CJ Jones <br></br> © 2021&nbsp;-&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
