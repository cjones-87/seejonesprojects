import React, { Suspense, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Spinner from '../../misc/Spinner';
import handleImageFailure from '../../misc/helpers/handleImageFailure';
import learningJournalEvents from './LearningJournalEvents';

const LearningJournalTimeline = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const customizedMarker = (item) => {
    return (
      <span
        className="custom-marker p-shadow-2"
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Suspense fallback={<Spinner />}>
        <Card
          className={
            localStorage.getItem('lightMode') === 'true'
              ? 'bg-black-alpha-40'
              : 'bg-gray-alpha-80'
          }
          title={item.status}
          subTitle={item.date}
          style={{
            borderRadius: 25,
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'whitesmoke'
                : 'indigo',
            textShadow:
              localStorage.getItem('lightMode') === 'true'
                ? '1px 1px 1px black'
                : '1px 1px 1px whitesmoke',
            justifyContent: 'space-evenly',
            textAlign: 'center',
            paddingTop: '1.5rem',
          }}
        >
          {item.iframe ? (
            <div>
              <Suspense fallback={<Spinner />}>
                <iframe
                  allow="autoplay"
                  height={dimensions.height / 3}
                  // frameBorder={0}
                  onError={handleImageFailure}
                  src={item.iframe}
                  style={{
                    border: 0,
                    borderRadius: 25,
                  }}
                  width={dimensions.width / 2.5}
                />
              </Suspense>
            </div>
          ) : (
            <LazyLoadImage
              alt={item.name}
              className="p-shadow-2"
              effect="blur"
              height={dimensions.height / 3}
              onError={handleImageFailure}
              src={item.image}
              style={{
                borderRadius: 25,
                padding: 10,
              }}
              width={dimensions.width / 2.5}
            />
          )}
          <p>{item.description}</p>
          <p>{item.techStack}</p>
          <Button
            label={
              <a href={item.link} target="_blank">
                Learn More
              </a>
            }
            className="p-button-text"
            style={{
              backgroundColor: '#ce93d8',
              borderRadius: 10,
              color:
                localStorage.getItem('lightMode') === 'true'
                  ? 'whitesmoke'
                  : 'indigo',
            }}
          />
        </Card>
      </Suspense>
    );
  };

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'timeline-demo bg-black-alpha-20'
          : 'timeline-demo bg-black-alpha-90'
      }
      style={{
        color: 'white',
        textShadow:
          localStorage.getItem('lightMode') === 'true'
            ? '1px 1px 1px black'
            : '1px 1px 1px whitesmoke',
        paddingTop: '1rem',
        width: dimensions.width,
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: 'rebeccapurple',
          paddingBottom: '1.5rem',
        }}
      >
        Learning Journal
      </h1>
      <div className="card" style={{ padding: '2rem' }}>
        <Timeline
          value={learningJournalEvents}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </div>
  );
};

export default LearningJournalTimeline;
