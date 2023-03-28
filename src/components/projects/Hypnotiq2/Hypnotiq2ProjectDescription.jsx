import React, { Suspense, useEffect, useState } from 'react';
import Spinner from '../../../misc/Spinner';
import { Card } from 'primereact/card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { imageNotFound } from '../../../photos/PhotoExports';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';

const Hypnotiq2ProjectDescription = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const data = [
    {
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      img: imageNotFound,
      paragraph: `Hypnotiq 2.0 is a music player app developed by myself. This app uses the latest industry technologies such as Javascript, React, React Native, Expo, CSS, Firebase, and Cloud Firestore. The app allows users to create, edit, and delete music playlists that persist through app reloads, and load music from their local device storage. Users can also stream audio to help with sleep and study patterns.`,
    },
    {
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      img: imageNotFound,
      paragraph: `In future iterations, Hypnotiq 2.0 plans to restructure the database design to optimize functionality. The current database structure posed some challenges, but the developer was able to implement some of the stretch goals from Hypnotiq, such as presenting users with audio from different genres and enabling them to create and manage personal playlists.`,
    },
    {
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      img: imageNotFound,
      paragraph: `Another key stretch goal for the upcoming iteration is to provide users with the option to share their playlists with others and comment on shared playlists. The ability to direct message other users will also be added, but only for artists whose work has been shared and admins.`,
    },
    {
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      img: imageNotFound,
      paragraph: `One of the significant challenges in developing Hypnotiq 2.0 was maintaining audio playback state and other related considerations. To achieve seamless audio playback and allow users complete control, the developer had to keep track of multiple factors such as audio loading, currently playing audio, from playlist or general library, current audio position, last audio position, and more. Hypnotiq 2.0 showcases the developer's expertise and passion for utilizing the latest industry technologies to develop innovative software solutions that enhance user experiences.`,
    },
  ];

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
      {data.map((item, index) => {
        const header = (
          <Suspense fallback={<Spinner />}>
            {item.iframe ? (
              <iframe
                src={item.iframe}
                style={{
                  border: 0,
                  borderRadius: 25,
                  padding: 10,
                }}
                width={dimensions.width / 5}
              />
            ) : (
              <LazyLoadImage
                //   alt={item.alt}
                effect="blur"
                //   height={item.height}
                onError={handleImageFailure}
                src={item.img}
                style={{
                  borderRadius: 25,
                  padding: 10,
                }}
                width={dimensions.width / 5}
              />
            )}
          </Suspense>
        );

        return (
          <div
            style={{
              alignItems: 'center',
              display: 'inline-grid',
              justifyItems: 'center',
              margin: '1rem',
            }}
          >
            <Suspense fallback={<Spinner />}>
              <Card
                className={
                  localStorage.getItem('lightMode') === 'true'
                    ? 'bg-black-alpha-20'
                    : 'bg-black-alpha-40'
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
                  width: dimensions.width / 5,
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
    </>
  );
};

export default Hypnotiq2ProjectDescription;
