import React, { Suspense, useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { Card } from 'primereact/card';

import Spinner from '../../misc/Spinner';

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

  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
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
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <FaArrowAltCircleLeft
            className="previous"
            onClick={previousSlide}
            style={{ color: 'rebeccapurple', position: 'static' }}
          />
          <FaArrowAltCircleRight
            className="next"
            onClick={nextSlide}
            style={{ color: 'rebeccapurple', position: 'static' }}
          />
        </div>

        {slides.map((slide, index) => {
          const header = (
            <Suspense fallback={<Spinner />}>
              <LazyLoadImage
                alt={slide.alt}
                effect="blur"
                height={slide.height}
                onError={handleError}
                src={slide.image}
                style={{
                  borderRadius: 25,
                  padding: 10,
                }}
                width={slide.width}
              />
            </Suspense>
          );

          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div style={{ marginTop: '2rem' }}>
                  <Suspense fallback={<Spinner />}>
                    <Card
                      className={
                        localStorage.getItem('lightMode') === 'true'
                          ? 'bg-black-alpha-20'
                          : 'bg-black-alpha-40'
                      }
                      style={{
                        borderRadius: 25,
                        color:
                          localStorage.getItem('lightMode') === 'true'
                            ? 'rebeccapurple'
                            : 'whitesmoke',
                        textShadow:
                          localStorage.getItem('lightMode') === 'true'
                            ? '1px 1px 1px indigo'
                            : '1px 1px 1px whitesmoke',
                        width: window.innerWidth / 3,
                      }}
                      header={header}
                    >
                      <p className="m-0">{slide.paragraph}</p>
                    </Card>
                  </Suspense>
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
