import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

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
      25000
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
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div>
                  <div
                    style={{
                      color: 'white',
                      textShadow: '2px 2px 2px #01020E',
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      border: 'solid',
                      borderColor: 'rebeccapurple',
                      borderRadius: 50,
                      borderWidth: 5,
                      padding: 30,
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={''}
                      className="image"
                      id="image"
                      onError={handleError}
                      style={{
                        borderRadius: '50%',
                        width: window.innerWidth / 3,
                        height: window.innerHeight / 3,
                        paddingBottom: 10,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      color: 'white',
                      textShadow: '2px 2px 2px #01020E',
                      width: window.innerWidth / 3,
                      paddingTop: 20,
                    }}
                  >
                    {slide.paragraph}
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
export default WhoAmICards;
