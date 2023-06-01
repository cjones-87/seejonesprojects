import React, { Suspense } from 'react';
import Spinner from '../../../misc/Spinner';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import LearningJournalEventsData from './data/LearningJournalEventsData';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LearningJournalTimeline = () => {
  const { height, width } = useWindowDimensions();

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
          title={item.status}
          subTitle={item.date}
          style={{
            background:
              localStorage.getItem('lightMode') === 'true'
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
            borderRadius: 25,
            color:
              localStorage.getItem('lightMode') === 'true'
                ? '#ba68c8'
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
                  height={height / 3}
                  onError={handleImageFailure}
                  src={item.iframe}
                  style={{
                    border: 0,
                    borderRadius: 25,
                  }}
                  width={width / 2.5}
                />
              </Suspense>
            </div>
          ) : (
            <LazyLoadImage
              alt={item.name}
              className="p-shadow-2"
              effect="blur"
              height={height / 3}
              onError={handleImageFailure}
              src={item.image}
              style={{
                borderRadius: 25,
                padding: 10,
              }}
              width={width / 2.5}
            />
          )}
          <p>{item.description}</p>
          <p>{item.techStack}</p>
          <Button
            label={
              <a
                href={item.link}
                style={{
                  color:
                    localStorage.getItem('lightMode') === 'true'
                      ? 'whitesmoke'
                      : '#ba68c8',
                  textShadow: '2px 2px 2px indigo',
                }}
                target="_blank"
              >
                Learn More
              </a>
            }
            className="p-button-text"
            style={{
              background:
                localStorage.getItem('lightMode') === 'true'
                  ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                  : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
            }}
          />
        </Card>
      </Suspense>
    );
  };

  return (
    <div
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        fontSize: '1vmin',
        textShadow:
          localStorage.getItem('lightMode') === 'true'
            ? '1px 1px 1px black'
            : '1px 1px 1px whitesmoke',
        paddingTop: '1rem',
        width: width,
      }}
    >
      <h1
        id="gradientText"
        style={{
          color:
            localStorage.getItem('lightMode') === 'true' ? 'black' : '#434343',
          fontSize: '10em',
          textAlign: 'center',
          paddingBottom: '1.5rem',
        }}
      >
        Learning Journal
      </h1>
      <div style={{ padding: '2rem' }}>
        <Timeline
          value={LearningJournalEventsData}
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
