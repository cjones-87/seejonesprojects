import { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import { Card } from 'primereact/card';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';

const LazyLoadImage = lazy(() => import('../lazy/LazyLoadImage'));
const Spinner = lazy(() => import('../../../misc/Spinner'));

const AboutMeCards = ({ slides }) => {
  const { darkTheme } = useContext(ThemeContext);

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
  });

  return (
    <div
      style={{
        color: 'white',
        paddingTop: '1rem',
        paddingBottom: '2rem',
      }}
    >
      <section className='slider'>
        <div
          style={{ display: 'flex', flexDirection: 'row', fontSize: '1vmin' }}
        >
          <div
            style={{ left: '3rem', position: 'absolute', marginTop: '20rem' }}
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
              }}
            />
          </div>

          <div
            style={{ right: '2rem', position: 'absolute', marginTop: '20rem' }}
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
              }}
            />
          </div>
        </div>

        {slides.map((slide, index) => {
          const header = (
            <Suspense fallback={<Spinner />}>
              <LazyLoadImage
                alt={slide.alt}
                height={slide.height}
                onError={handleImageFailure}
                src={slide.image}
                style={{
                  borderRadius: 25,
                  padding: 10,
                }}
                width='50vw'
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
                      style={{
                        background: darkTheme
                          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
                        borderRadius: 25,
                        color: darkTheme ? 'whitesmoke' : '#ba68c8',
                        textShadow: '2px 2px 2px indigo',
                        width: '50vw',
                      }}
                      header={header}
                    >
                      <div className='m-0'>{slide.paragraph}</div>
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
