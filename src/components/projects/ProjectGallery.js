import { Carousel } from 'react-carousel-minimal';

import computerLove from './computerLove.gif';
import BoundzBookstore from './BoundzBookstore.png';
import Hypnotiq from './Hypnotiq.gif';
import SeeJonesEngineer from './SeeJonesEngineer.png';

export default function ProjectGallery() {
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1645978118126-8d1613fa4088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'Guessing Game',
    },
    {
      image:
        'https://images.unsplash.com/photo-1645815426981-e62313bcc718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
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
      <h2 style={{ textAlign: 'center' }}>Projects</h2>
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
