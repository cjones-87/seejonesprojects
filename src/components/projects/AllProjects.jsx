import { Suspense, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../misc/context/LightDarkThemeContext';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import handleImageFailure from '../../../misc/helpers/handleImageFailure';
import ProjectSlideshow from './ProjectSlideshow';
import Spinner from '../../../misc/Spinner';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectsCSS/Projects.css';
import './ProjectsCSS/ProjectSlideshow.css';

const AllProjects = () => {
  const { darkTheme } = useContext(ThemeContext);
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const navigateToLearningJournal = () => navigate('/learningjournal');

  const projectNameStyle = {
    color: darkTheme ? '#ba68c8' : 'whitesmoke',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const projects = [
    {
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
      className="table-header"
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        borderRadius: '5px',
        color: darkTheme ? '#ba68c8' : 'whitesmoke',
        padding: '5px',
        textShadow: '1px 1px 1px indigo',
      }}
    >
      See Jones Projects
      <Button
        icon="pi pi-images"
        onClick={navigateToLearningJournal}
        style={{
          background: darkTheme
            ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
            : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
          color: darkTheme ? 'whitesmoke' : '#ba68c8',
        }}
        tooltip="View in my learning journal"
        tooltipOptions={{ position: 'left' }}
      />
    </div>
  );

  const footer = (
    <div
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        borderRadius: '5px',
        color: darkTheme ? '#ba68c8' : 'whitesmoke',
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
                allow="autoplay"
                className={'project-image'}
                height={height / 10}
                onError={handleImageFailure}
                src={rowData.iframe}
                style={{
                  backgroundColor: '#cccccc',
                  border: 0,
                  borderRadius: 25,
                  padding: '5px',
                }}
                width="10vw"
              />
            </Suspense>
          </div>
        ) : (
          <LazyLoadImage
            alt={rowData.caption}
            className={'project-image'}
            effect="blur"
            height={height / 10}
            onError={handleImageFailure}
            src={rowData.image}
            style={{
              backgroundColor: '#cccccc',
              borderRadius: 25,
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
      className="datatable-project"
      style={{
        background: darkTheme
          ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
          : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        color: darkTheme ? '#ba68c8' : 'whitesmoke',
        textShadow: '2px 2px 2px indigo',
        paddingTop: '1rem',
        width: width,
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <ProjectSlideshow slides={projects} />
      </div>
      <div>
        <DataTable
          value={projects}
          header={header}
          footer={footer}
          responsiveLayout="scroll"
        >
          <Column
            field="name"
            header="Title"
            style={{
              background: darkTheme
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkTheme ? '#ba68c8' : 'whitesmoke',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            header="Image"
            body={imageBodyTemplate}
            style={{
              background: darkTheme
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkTheme ? '#ba68c8' : 'whitesmoke',
              paddingRight: '4rem',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field="category"
            header="Category"
            style={{
              background: darkTheme
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkTheme ? '#ba68c8' : 'whitesmoke',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field="rating"
            header="Difficulty Level"
            body={ratingBodyTemplate}
            style={{
              background: darkTheme
                ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
                : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
              color: darkTheme ? '#ba68c8' : 'whitesmoke',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AllProjects;
