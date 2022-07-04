import ImageGallery from 'react-image-gallery';
import './Projects.css';

import IdleClicker from './IdleClicker.png';
import GuessingGame from './GuessingGame.png';
import computerLove from './computerLove.gif';
import BoundzBookstore from './BoundzBookstore.png';
import Hypnotiq from './Hypnotiq.gif';
// import imageNotFound from './imageNotFound.jpeg';

export default function ProjectGallery() {
  const imageGallery = [
    {
      original: computerLove,
      thumbnail: computerLove,

      thumbnailLabel: 'Computer Love',
      description: 'Computer Love',

      originalHeight: '300vh',
      originalwidth: '75vw',
      thumbnailHeight: '100vh',
      thumbnailwidth: '100vw',
    },
    {
      original: Hypnotiq,
      thumbnail: Hypnotiq,

      thumbnailLabel: 'Hypnotiq',
      description: 'Hypnotiq',

      originalHeight: '300vh',
      originalwidth: '75vw',
      thumbnailHeight: '100vh',
      thumbnailwidth: '100vw',
    },
    {
      original: BoundzBookstore,
      thumbnail: BoundzBookstore,

      thumbnailLabel: 'Boundz Bookstore',
      description: 'Boundz Bookstore',

      originalHeight: '300vh',
      originalwidth: '75vw',
      thumbnailHeight: '100vh',
      thumbnailwidth: '100vw',
    },
    {
      original: IdleClicker,
      thumbnail: IdleClicker,

      thumbnailLabel: 'Idle Clicker',
      description: 'Idle Clicker',

      originalHeight: '300vh',
      originalwidth: '75vw',
      thumbnailHeight: '100vh',
      thumbnailwidth: '100vw',
    },
    {
      original: GuessingGame,
      thumbnail: GuessingGame,

      thumbnailLabel: 'Guessing Game',
      description: 'Guessing Game',

      originalHeight: '300vh',
      originalwidth: '75vw',
      thumbnailHeight: '100vh',
      thumbnailwidth: '100vw',
    },
  ];

  return (
    <div
      className="App bg-black-alpha-90"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
        paddingBottom: 175,
      }}
    >
      <h1 style={{ textAlign: 'center', color: 'rebeccapurple' }}>Projects</h1>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <ImageGallery
            items={imageGallery}
            infinite={true}
            lazyLoad={true}
            showNav={true}
            showThumbnails={true}
            thumbnailPosition={'bottom'}
            showFullscreenButton={true}
            useTranslate3D={true}
            showPlayButton={false}
            showBullets={true}
            showIndex={true}
            autoPlay={true}
          />
        </div>
      </div>
    </div>
  );
}
