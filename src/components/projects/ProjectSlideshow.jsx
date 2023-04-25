import React, { useEffect, useRef, useState } from 'react';
import { imageNotFound } from '../../photos/PhotoExports';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectsCSS/ProjectSlideshow.css';

const ProjectSlideshow = ({ slides }) => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const handleError = (e) => {
    e.target.src = imageNotFound;
    e.onerror = null;
    return e;
  };

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
    const handleResize = () =>
      setDimensions({ height: innerWidth, width: innerWidth });

    window.addEventListener('resize', handleResize);

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slidesLength - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [current, dimensions.width, dimensions.height]);

  return (
    <div
      style={{
        fontSize: '1vmin',
        textShadow: '2px 2px 2px #01020E',
      }}
    >
      <h1
        id="gradientText"
        style={{
          color:
            localStorage.getItem('lightMode') === 'true' ? 'black' : '#434343',
          fontSize: '10em',
          paddingBottom: '4rem',
          textAlign: 'center',
          textShadow:
            localStorage.getItem('lightMode') === 'true'
              ? '1px 1px 1px indigo'
              : '1px 1px 1px whitesmoke',
        }}
      >
        Projects
      </h1>
      <section
        className="slider"
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '4.5rem',
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'row', fontSize: '1vmin' }}
        >
          <div
            style={{ left: '3rem', position: 'absolute', marginTop: '20em' }}
          >
            <FaArrowAltCircleLeft
              className="previous"
              onClick={previousSlide}
              style={{
                color: 'rebeccapurple',
                fontSize: '10em',
                position: 'sticky',
              }}
            />
          </div>

          <div
            style={{ right: '2rem', position: 'absolute', marginTop: '20em' }}
          >
            <FaArrowAltCircleRight
              className="next"
              onClick={nextSlide}
              style={{
                color: 'rebeccapurple',
                fontSize: '10em',
                position: 'sticky',
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
                <div
                  style={{
                    color: 'white',
                    textShadow:
                      localStorage.getItem('lightMode') === 'true'
                        ? '1px 1px 1px indigo'
                        : '1px 1px 1px whitesmoke',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {slide.iframe ? (
                      <iframe
                        allow="autoplay"
                        height={dimensions.height / 2}
                        onError={handleError}
                        src={slide.iframe}
                        style={{
                          border: 0,
                          borderRadius: 25,
                        }}
                        width={dimensions.width / 2}
                      />
                    ) : (
                      <LazyLoadImage
                        className="image"
                        alt={slide.caption}
                        effect="blur"
                        height={dimensions.height / 2}
                        onError={handleError}
                        src={slide.image}
                        style={{
                          borderRadius: 25,
                          padding: 10,
                        }}
                        width={dimensions.width / 2}
                      />
                    )}
                  </div>
                  <h3 style={{ textAlign: 'center', color: 'rebeccapurple' }}>
                    {slide.caption}
                  </h3>

                  <h5 style={{ color: 'red' }} className="slideNumber">
                    {slide.id} of {slidesLength}
                  </h5>
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
