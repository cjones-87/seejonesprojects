import { Carousel } from 'react-carousel-minimal';

import IdleClicker from './IdleClicker.png';
import GuessingGame from './GuessingGame.png';
import computerLove from './computerLove.gif';
import BoundzBookstore from './BoundzBookstore.png';
import Hypnotiq from './Hypnotiq.gif';
import SeeJonesEngineer from './SeeJonesEngineer.png';
// import imageNotFound from './imageNotFound.jpeg';

export default function ProjectGallery() {
  const data = [
    {
      image: computerLove,
      caption: "Computer Love",
    },
    {
      image: Hypnotiq,
      caption: "Hypnotiq",
    },
    {
      image: BoundzBookstore,
      caption: "Boundz Bookstore",
    },
    {
      image: IdleClicker,
      caption: "Idle Clicker",
    },
    {
      image: GuessingGame,
      caption: "Guessing Game",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div
      className="App bg-black-alpha-90"
      style={{
        color: "white",
        textShadow: "2px 2px 2px #01020E",
        paddingTop: "1rem",
        paddingBottom: 175,
      }}
    >
      <h1 style={{ textAlign: "center", color: "rebeccapurple" }}>Projects</h1>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
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
            slideBackgroundColor="rebeccapurple"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth={"100vw"}
            showNavBtn={true}
            style={{
              textAlign: "center",
              justifyContent: "center",
              justifyItems: "center",
              maxWidth: "50vw",
              maxHeight: "50vh",
              margin: "40px  auto",
              color: "white",
              textShadow: "2px 2px 2px #01020E",
            }}
          />
        </div>
      </div>
    </div>
  );
}
