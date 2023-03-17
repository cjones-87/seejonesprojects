import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectsCSS/ProjectSlideshow.css';
import { imageNotFound } from '../../photos/PhotoExports';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ProjectSlideshow = ({ slides }) => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const iframeIndices = [0, 1, 2, 3];
  const handleError = (e) => {
    e.target.src = imageNotFound;
    e.onerror = null;
    return e;
  };

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
    const handleResize = () =>
      setDimensions({ height: innerWidth, width: innerWidth });

    window.addEventListener('resize', handleResize);

    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      4500
    );

    return () => {
      resetTimeout();
    };
  }, [current, dimensions.width, dimensions.height]);

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'App bg-black-alpha-20'
          : 'App bg-black-alpha-90'
      }
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
      }}
    >
      <h1
        style={{
          color: 'rebeccapurple',
          paddingBottom: '3rem',
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
                  <a href={slide.href}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {iframeIndices.includes(index) ? (
                        <iframe
                          allow="autoplay"
                          height={dimensions.height / 2}
                          onError={handleError}
                          src={slide.iframe}
                          style={{
                            borderRadius: 25,
                            padding: 10,
                          }}
                          width={dimensions.width / 2}
                        ></iframe>
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
                    <a href={slide.href}>
                      <h3
                        style={{ textAlign: 'center', color: 'rebeccapurple' }}
                      >
                        {slide.caption}
                      </h3>
                    </a>
                  </a>
                  <h5 style={{ color: 'red' }} className="slideNumber">
                    {slide.id} of {length}
                  </h5>
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
                      style={{
                        color: 'rebeccapurple',
                        position: 'static',
                      }}
                    />
                    <FaArrowAltCircleRight
                      className="next"
                      onClick={nextSlide}
                      style={{
                        color: 'rebeccapurple',
                        position: 'static',
                      }}
                    />
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
