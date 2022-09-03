import React, { useState } from 'react';
import { ProjectData } from './data/ProjectData';
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

  // if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div
      className="App bg-black-alpha-90"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'rebeccapurple' }}>Projects</h1>
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

        {ProjectData.map((slide, index) => {
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
                  <h5 style={{ textAlign: 'center', color: 'rebeccapurple' }}>
                    {slide.id}/{ProjectData.length}
                  </h5>
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    className="image"
                  />
                  <h3 style={{ textAlign: 'center', color: 'rebeccapurple' }}>
                    {slide.caption}
                  </h3>
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
