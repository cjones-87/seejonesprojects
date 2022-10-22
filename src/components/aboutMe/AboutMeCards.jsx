import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { Card } from 'primereact/card';

const AboutMeCards = ({ slides }) => {
  const handleError = (e) => (e.target.src = 'https://i.imgur.com/5rXZ1Fl.png');

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const timeoutRef = React.useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      20000
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  return (
    <div
      style={{
        color: 'white',
        // textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <h1
        style={{
          color: 'rebeccapurple',
          paddingBottom: '4rem',
          textShadow:
            localStorage.getItem('lightMode') === 'true'
              ? '1px 1px 1px indigo'
              : '1px 1px 1px whitesmoke',
        }}
      >
        About Me
      </h1>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="previous"
          onClick={previousSlide}
          style={{ color: 'rebeccapurple' }}
        />
        <FaArrowAltCircleRight
          className="next"
          onClick={nextSlide}
          style={{ color: 'rebeccapurple' }}
        />

        {slides.map((slide, index) => {
          const header = (
            <img
              alt="Card"
              src={slide.image}
              onError={handleError}
              style={{
                borderRadius: 25,
                padding: 10,
              }}
            />
          );
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div style={{ marginTop: '2rem' }}>
                  <Card
                    style={{
                      borderRadius: 25,
                      width: window.innerWidth / 3,
                    }}
                    header={header}
                  >
                    <p className="m-0" style={{ lineHeight: '1.5' }}>
                      {slide.paragraph}
                    </p>
                  </Card>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default AboutMeCards;
