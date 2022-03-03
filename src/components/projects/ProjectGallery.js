import { Carousel } from 'react-carousel-minimal';

import IdleClicker from './IdleClicker.png';
import GuessingGame from './GuessingGame.png';
import computerLove from './computerLove.gif';
import BoundzBookstore from './BoundzBookstore.png';
import Hypnotiq from './Hypnotiq.gif';
import SeeJonesEngineer from './SeeJonesEngineer.png';
import imageNotFound from './imageNotFound.jpeg';

export default function ProjectGallery() {
  const data = [
    {
      image: GuessingGame,
      caption: 'Guessing Game',
    },
    {
      image: IdleClicker,
      caption: 'Idle Clicker',
    },
    {
      image: BoundzBookstore,
      caption: 'Boundz Bookstore',
    },
    {
      image: Hypnotiq,
      caption: 'Hypnotiq',
    },
    {
      image: computerLove,
      caption: 'Computer Love',
    },
    {
      image: SeeJonesEngineer,
      caption: 'See Jones Engineer',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="App bg-black-alpha-90" style={{ paddingBottom: 175 }}>
      <h2 style={{ textAlign: 'center', color: 'rebeccapurple' }}>Projects</h2>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={5000}
            width="75vw"
            height="50vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '50vw',
              maxHeight: '50vh',
              margin: '40px  auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}
