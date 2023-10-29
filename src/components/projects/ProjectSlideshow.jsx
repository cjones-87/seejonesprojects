import React, { useContext, useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import LazyLoadImage from '../lazy/LazyLoadImage';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';

const ProjectSlideshow = ({ slides }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();

  const [current, setCurrent] = useState(0);
  const slidesLength = slides.length;

  const nextSlide = () => {
    setCurrent(current === slidesLength - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slidesLength - 1 : current - 1);
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
          prevIndex === slidesLength - 1 ? 0 : prevIndex + 1
        ),
      10000
    );

    return () => {
      resetTimeout();
    };
  });

  return (
    <div
      style={{
        fontSize: '1vmin',
        textShadow: '2px 2px 2px indigo',
      }}
    >
      <section
        className='slider'
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '2rem',
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'row', fontSize: '1vmin' }}
        >
          <div
            style={{ left: '3rem', position: 'absolute', marginTop: '20em' }}
          >
            <FaArrowAltCircleLeft
              className='previous'
              onClick={previousSlide}
              style={{
                color: darkTheme ? '#ba68c8' : 'whitesmoke',
                filter: darkTheme
                  ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
                  : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
                fontSize: '10em',
                position: 'sticky',
                textShadow: '2px 2px 2px indigo',
              }}
            />
          </div>

          <div
            style={{ right: '2rem', position: 'absolute', marginTop: '20em' }}
          >
            <FaArrowAltCircleRight
              className='next'
              onClick={nextSlide}
              style={{
                color: darkTheme ? '#ba68c8' : 'whitesmoke',
                filter: darkTheme
                  ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
                  : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
                fontSize: '10em',
                position: 'sticky',
                textShadow: '2px 2px 2px indigo',
              }}
            />
          </div>
        </div>
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div>
                  <div style={{ justifyContent: 'center' }}>
                    {!slide.image ? (
                      <iframe
                        allow='autoplay'
                        height={height / 2}
                        onError={handleImageFailure}
                        src={slide.iframe}
                        style={{
                          border: 0,
                          borderRadius: 25,
                        }}
                        width={width / 2}
                      />
                    ) : (
                      <LazyLoadImage
                        className='image'
                        alt={slide.caption}
                        height={height / 2}
                        onError={handleImageFailure}
                        src={slide.image}
                        style={{
                          borderRadius: 25,
                          padding: 10,
                        }}
                        width={width / 2}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: width < 768 ? 'column' : 'row',
                      justifyContent: width < 768 ? 'center' : 'space-between',
                    }}
                  >
                    <h3
                      style={{
                        color: darkTheme ? '#ba68c8' : 'whitesmoke',
                        filter: 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
                        textAlign: 'center',
                        textShadow: '2px 2px 2px indigo',
                      }}
                    >
                      {slide.caption}
                    </h3>

                    <h5
                      style={{
                        color: darkTheme ? '#ba68c8' : 'whitesmoke',
                        filter: 'drop-shadow(0px 2px 4px rgba(75, 0, 130, 1))',
                        textShadow: '2px 2px 2px indigo',
                      }}
                      className='slideNumber'
                    >
                      {index + 1} of {slidesLength}
                    </h5>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectSlideshow;
