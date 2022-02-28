import { Carousel } from 'react-carousel-minimal';

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
      image:
        'https://images.unsplash.com/photo-1645995575875-ea6511c9d127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      caption: 'Boundz Bookstore',
    },
    {
      image:
        'https://images.unsplash.com/photo-1645979728657-6f7b080ea386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      caption: 'Hypnotiq',
    },
    {
      image:
        'https://images.unsplash.com/photo-1645389686591-b9ea0124375c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'Computer Love',
    },
    {
      image:
        'https://images.unsplash.com/photo-1645995575868-62b51eab75af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
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
    <div className="App" style={{ paddingBottom: 175 }}>
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
