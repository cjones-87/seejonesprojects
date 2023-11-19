import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../../../misc/customHooks/useTheme';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const LazyLoadImage = lazy(() =>
  import('../reusableComponents/lazy/LazyLoadImage')
);
const ProjectSlideshow = lazy(() => import('./ProjectSlideshow'));
const Spinner = lazy(() => import('../../../misc/Spinner'));
const Head = lazy(() => import('../reusableComponents/SEO/Head'));

const AllProjects = () => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const navigateToLearningJournal = () => navigate('/learningjournal');

  const projectNameStyle = {
    color: darkMode ? '#ba68c8' : 'whitesmoke',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const projects = [
    {
      alt: 'See Jones Engineer Portfolio Screenshot - CJ Jones - Software Engineer',
      caption: 'SeeJonesEngineer.com',
      category: 'React Web App',
      difficulty: 9,
      image: 'https://i.imgur.com/PVEBzQJ.gif',
      name: (
        <div
          onClick={() => navigate('/projects/seejonesengineer')}
          style={projectNameStyle}
        >
          See Jones Engineer
        </div>
      ),
      status: 'complete',
    },
    {
      alt: 'Blueprint eCommerce Boilerplate Screenshot - CJ Jones - Software Engineer',
      caption: 'Blueprint Boilerplate',
      category: 'React Web App',
      difficulty: 8,
      image: 'https://i.imgur.com/HOiTb5v.gif',
      name: (
        <div
          onClick={() => navigate('/projects/blueprintboilerplate')}
          style={projectNameStyle}
        >
          Blueprint Boilerplate
        </div>
      ),
      status: 'complete',
    },
    {
      alt: 'Hypnotiq 2.0 Music Player Screenshot - CJ Jones - Software Engineer',
      caption: 'Hypnotiq Musiq 2.0',
      category: 'React Native Mobile App',
      difficulty: 10,
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      image: 'https://i.imgur.com/modvRWr.gif',
      name: (
        <div
          onClick={() => navigate('/projects/hypnotiq2')}
          style={projectNameStyle}
        >
          Hypnotiq 2.0
        </div>
      ),
      status: 'v3 in progress',
    },
    {
      alt: 'IYKYK Multiple Choice Quiz Game Screenshot - CJ Jones - Software Engineer',
      caption: 'IYKYK Quiz',
      category: 'React Web App',
      difficulty: 8,
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      image: 'https://i.imgur.com/mYnBu3I.gif',
      name: (
        <div
          onClick={() => navigate('/projects/iykyk')}
          style={projectNameStyle}
        >
          All I Know Is, IYKYK
        </div>
      ),
      status: 'complete',
    },

    {
      alt: 'Computer Love Dating/Networking App Screenshot - CJ Jones - Software Engineer',
      caption: 'Computer Love Dating',
      category: 'React Native Mobile App',
      difficulty: 10,
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      image: 'https://i.imgur.com/2IkB1A9.gif',
      name: (
        <div
          onClick={() => navigate('/projects/computerlove')}
          style={projectNameStyle}
        >
          Computer Love
        </div>
      ),

      status: 'complete',
    },
    {
      alt: 'Hypnotiq 1.0 Music Player Screenshot - CJ Jones - Software Engineer',
      caption: 'Hypnotiq Musiq 1.0',
      category: 'React Native Mobile App',
      difficulty: 7,
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      image: 'https://i.imgur.com/HjTbdr9.gif',
      name: (
        <div
          onClick={() => navigate('/projects/hypnotiq')}
          style={projectNameStyle}
        >
          Hypnotiq
        </div>
      ),

      status: 'v2.0 complete',
    },
    {
      alt: 'Boundz Bookstore eCommerce Website Screenshot - CJ Jones - Software Engineer',
      caption: 'Boundz Bookstore',
      category: 'React Web App',
      difficulty: 10,
      image: 'https://i.imgur.com/XV1sfOI.gif',
      name: (
        <div
          onClick={() => navigate('/projects/boundzbookstore')}
          style={projectNameStyle}
        >
          Boundz Bookstore
        </div>
      ),
      status: 'complete',
    },
    {
      alt: 'Idle Coffee Clicker Game Screenshot - CJ Jones - Software Engineer',
      caption: 'Idle Clicker',
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 6,
      image: 'https://i.imgur.com/KfVcjhN.gif',
      name: (
        <div
          onClick={() => navigate('/projects/idleclicker')}
          style={projectNameStyle}
        >
          Idle Clicker
        </div>
      ),

      status: 'v2 in progress',
    },
    {
      alt: 'Guessing Game Screenshot - CJ Jones - Software Engineer',
      caption: 'Guessing Game',
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 3,
      image: 'https://i.imgur.com/EGYVB8e.gif',
      name: (
        <div
          onClick={() => navigate('/projects/guessinggame')}
          style={projectNameStyle}
        >
          Guessing Game
        </div>
      ),
      status: 'complete',
    },
  ];

  const header = (
    <div
      className='table-header'
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        borderRadius: '5px',
        color: darkMode ? '#ba68c8' : 'whitesmoke',
        padding: '5px',
        textShadow: '1px 1px 1px indigo',
      }}
    >
      See Jones Projects
      <Button
        icon='pi pi-images'
        onClick={navigateToLearningJournal}
        style={{
          background: darkMode
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          color: darkMode ? 'whitesmoke' : '#ba68c8',
        }}
        tooltip='View in my learning journal'
        tooltipOptions={{ position: 'left' }}
      />
    </div>
  );

  const footer = (
    <div
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        borderRadius: '5px',
        color: darkMode ? '#ba68c8' : 'whitesmoke',
        padding: '10px',
        textShadow: '1px 1px 1px indigo',
      }}
    >
      In total there are {projects ? projects.length : 0} projects.
    </div>
  );

  const ratingBodyTemplate = (rowData) => {
    return (
      <Rating value={rowData.difficulty} readOnly cancel={false} stars={10} />
    );
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <>
        {!rowData.image ? (
          <div>
            <Suspense fallback={<Spinner />}>
              <iframe
                allow='autoplay'
                className={'project-image'}
                height={height / 10}
                onError={handleImageFailure}
                src={rowData.iframe}
                style={{
                  backgroundColor: '#cccccc',
                  border: 0,
                  borderRadius: 25,
                  cursor: 'pointer',
                  padding: '5px',
                }}
                width='10vw'
              />
            </Suspense>
          </div>
        ) : (
          <LazyLoadImage
            alt={rowData.caption}
            className={'project-image'}
            height={height / 10}
            onError={handleImageFailure}
            src={rowData.image}
            style={{
              backgroundColor: '#cccccc',
              borderRadius: 25,
              cursor: 'pointer',
              padding: '5px',
            }}
            width={width / 10}
          />
        )}
      </>
    );
  };

  return (
    <div
      className='datatable-project'
      style={{
        background: darkMode
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        color: darkMode ? '#ba68c8' : 'whitesmoke',
        fontSize: '1vmin',
        textShadow: '2px 2px 2px indigo',
        paddingBottom: '7rem',
        paddingTop: '1rem',
        width: width,
      }}
    >
      <Head
        title='Project Portfolio: CJ Jones - Software Engineer'
        description={`Dive into the showcase of CJ Jones's software engineering excellence. Explore a collection of meticulously crafted projects and client work, where intuitive design meets powerful functionality. Witness firsthand the intersection of cutting-edge technology and user-friendly interfaces.`}
      />

      <h1
        id='gradientText'
        style={{
          color: darkMode ? '#434343' : 'black',
          filter: darkMode
            ? 'drop-shadow(0px 2px 16px rgba(186, 104, 200, 1))'
            : 'drop-shadow(0px 2px 16px rgba(75, 0, 130, 1))',
          fontSize: '10em',
          paddingBottom: '4rem',
          textAlign: 'center',
          textShadow: '2px 2px 2px indigo',
        }}
      >
        Projects
      </h1>

      <div style={{ marginBottom: '2rem' }}>
        <ProjectSlideshow slides={projects} />
      </div>

      <div>
        <DataTable
          value={projects}
          header={header}
          footer={footer}
          responsiveLayout='scroll'
        >
          <Column
            field='name'
            header='Title'
            style={{
              background: darkMode
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkMode ? '#ba68c8' : 'whitesmoke',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            header='Image'
            body={imageBodyTemplate}
            style={{
              background: darkMode
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkMode ? '#ba68c8' : 'whitesmoke',
              paddingRight: '4rem',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field='category'
            header='Category'
            style={{
              background: darkMode
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkMode ? '#ba68c8' : 'whitesmoke',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field='rating'
            header='Difficulty Level'
            body={ratingBodyTemplate}
            style={{
              background: darkMode
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkMode ? '#ba68c8' : 'whitesmoke',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AllProjects;
