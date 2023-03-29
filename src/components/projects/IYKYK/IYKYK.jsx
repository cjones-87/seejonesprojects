import React, { Suspense, useEffect, useState } from 'react';
import Spinner from '../../../misc/Spinner';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import IYKYKData from './IYKYKData';
import { Card } from 'primereact/card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IYKYK = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        height: innerHeight,
        width: innerWidth,
      });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  return (
    <>
      {IYKYKData.map((item, index) => {
        const header = (
          <Suspense fallback={<Spinner />}>
            {!item.img ? (
              <iframe
                height={dimensions.height / 4}
                onError={handleImageFailure}
                src={item.iframe}
                style={{
                  border: 0,
                  borderRadius: 25,
                  padding: 10,
                }}
                width={dimensions.width}
              />
            ) : (
              <LazyLoadImage
                alt={item.alt}
                effect="blur"
                height={dimensions.height / 4}
                onError={handleImageFailure}
                src={item.img}
                style={{
                  borderRadius: 25,
                  padding: 10,
                }}
                width={dimensions.width}
              />
            )}
          </Suspense>
        );

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '2rem',
            }}
          >
            <Suspense fallback={<Spinner />}>
              <Card
                className={
                  localStorage.getItem('lightMode') === 'true'
                    ? 'bg-black-alpha-20'
                    : 'bg-black-alpha-90'
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
                }}
                header={header}
                width={dimensions.width / 5}
              >
                <p className="m-0" style={{ textAlign: 'center' }}>
                  {item.paragraph}
                </p>
              </Card>
            </Suspense>
          </div>
        );
      })}
    </>
  );
};

export default IYKYK;
