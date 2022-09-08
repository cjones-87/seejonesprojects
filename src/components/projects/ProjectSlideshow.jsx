import React, { useState } from 'react';
import './ProjectSlideshow.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import './ProjectSlideshow.css';

const ProjectSlideshow = ({ slides }) => {
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
      4500
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  return (
    <div
      className="App bg-black-alpha-90"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
      }}
    >
      <h1 style={{ color: 'rebeccapurple', paddingBottom: '1rem' }}>
        Projects
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
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div
                  style={{
                    color: 'white',
                    textShadow: '2px 2px 2px #01020E',
                    paddingTop: '1rem',
                  }}
                >
                  <a href={slide.href}>
                    <h3 style={{ textAlign: 'center', color: 'rebeccapurple' }}>
                      {slide.caption}
                    </h3>
                  </a>
                  <a href={slide.href}>
                    <img
                      src={slide.image}
                      alt={slide.caption}
                      className="image"
                      id="image"
                    />
                  </a>
                  <h5 style={{ color: 'red' }} className="slideNumber">
                    {slide.id} of {length}
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
