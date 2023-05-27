import React, { Suspense } from 'react';
import Spinner from '../../../misc/Spinner';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import { Card } from 'primereact/card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const IndividualProject = ({ data, height, width }) => {
  return (
    <div
      style={{
        display: 'grid',
        margin: 'auto',
        maxWidth: width < 768 ? width : width / 2,
        placeItems: 'center',
      }}
    >
      {data.map((item, index) => {
        const header = (
          <Suspense fallback={<Spinner />}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {!item.img ? (
                <iframe
                  height={height / 4}
                  onError={handleImageFailure}
                  src={item.iframe}
                  style={{
                    border: 0,
                    borderRadius: 25,
                    padding: 10,
                  }}
                  width={width < 768 ? width : width / 2}
                />
              ) : (
                <LazyLoadImage
                  alt={item.alt}
                  effect="blur"
                  height={height / 4}
                  onError={handleImageFailure}
                  src={item.img}
                  style={{
                    borderRadius: 25,
                    padding: 10,
                  }}
                  width={width < 768 ? width : width / 2}
                />
              )}
            </div>
          </Suspense>
        );

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
            }}
          >
            <Suspense fallback={<Spinner />}>
              <Card
                style={{
                  background:
                    localStorage.getItem('lightMode') === 'true'
                      ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                      : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
                  borderRadius: 25,
                  color:
                    localStorage.getItem('lightMode') === 'true'
                      ? 'whitesmoke'
                      : '#ba68c8',
                  textShadow: '1px 1px 1px indigo',
                }}
                header={header}
              >
                <p className="m-0" style={{ textAlign: 'center' }}>
                  {item.paragraph}
                </p>
              </Card>
            </Suspense>
          </div>
        );
      })}
    </div>
  );
};

export default IndividualProject;
