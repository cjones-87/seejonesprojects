import React, { Suspense, useEffect, useRef, useState } from 'react';
import handleImageFailure from '../../misc/helpers/handleImageFailure';
import Spinner from '../../misc/Spinner';
import { Card } from 'primereact/card';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

const AboutMeCards = ({ slides }) => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });
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

    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);

    return () => {
      resetTimeout();
    };
  }, [current, dimensions.width, dimensions.height]);

  return (
    <div
      style={{
        color: 'white',
        paddingTop: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <section className="slider">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{ left: '3rem', position: 'absolute', marginTop: '25rem' }}
          >
            <FaArrowAltCircleLeft
              className="previous"
              onClick={previousSlide}
              style={{
                color: 'rebeccapurple',
                fontSize: '5rem',
                position: 'sticky',
              }}
            />
          </div>

          <div
            style={{ right: '2rem', position: 'absolute', marginTop: '25rem' }}
          >
            <FaArrowAltCircleRight
              className="next"
              onClick={nextSlide}
              style={{
                color: 'rebeccapurple',
                fontSize: '5rem',
                position: 'sticky',
              }}
            />
          </div>
        </div>

        {slides.map((slide, index) => {
          const header = (
            <Suspense fallback={<Spinner />}>
              <LazyLoadImage
                alt={slide.alt}
                effect="blur"
                height={slide.height}
                onError={handleImageFailure}
                src={slide.image}
                style={{
                  borderRadius: 25,
                  padding: 10,
                }}
                width={dimensions.width / 2}
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
                        width: dimensions.width / 2,
                      }}
                      header={header}
                    >
                      <div className="m-0">{slide.paragraph}</div>
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
