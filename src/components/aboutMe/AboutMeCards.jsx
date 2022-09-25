import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import { Card } from 'primereact/card';

const WhoAmICards = ({ slides }) => {
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
    <div id="section">
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
            <img alt="Card" src={slide.image} onError={handleError} />
          );
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div>
                  <Card style={{ width: '25em' }} header={header}>
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
export default WhoAmICards;
