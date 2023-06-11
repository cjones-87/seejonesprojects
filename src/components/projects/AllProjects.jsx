import { Suspense, useContext, useEffect } from 'react';
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

  const projects = [
    {
      caption: 'SeeJonesEngineer.com',
      category: 'React Web App',
      difficulty: 9,
      href: '/',
      image: 'https://i.imgur.com/PVEBzQJ.gif',
      name: (
        <a
          href={'/projects/seejonesengineer'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          See Jones Engineer
        </a>
      ),
      status: 'complete',
    },
    {
      caption: 'Blueprint Boilerplate',
      category: 'React Web App',
      difficulty: 8,
      href: '/projects/blueprintboilerplate',
      image: 'https://i.imgur.com/HOiTb5v.gif',
      name: (
        <a
          href={'/projects/blueprintboilerplate'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Blueprint Boilerplate
        </a>
      ),
      status: 'complete',
    },
    {
      caption: 'Hypnotiq Musiq 2.0',
      category: 'React Native Mobile App',
      difficulty: 10,
      href: '/projects/hypnotiq2',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      image: 'https://i.imgur.com/modvRWr.gif',
      name: (
        <a
          href={'/projects/hypnotiq2'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Hypnotiq 2.0
        </a>
      ),
      status: 'v3 in progress',
    },
    {
      caption: 'IYKYK Quiz',
      category: 'React Web App',
      difficulty: 8,
      href: '/projects/iykyk',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      image: 'https://i.imgur.com/mYnBu3I.gif',
      name: (
        <a
          href={'/projects/iykyk'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          All I Know Is, IYKYK
        </a>
      ),
      status: 'complete',
    },

    {
      caption: 'Computer Love Dating',
      category: 'React Native Mobile App',
      difficulty: 10,
      href: '/projects/computerlove',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      image: 'https://i.imgur.com/2IkB1A9.gif',
      name: (
        <a
          href={'/projects/computerlove'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Computer Love
        </a>
      ),

      status: 'complete',
    },
    {
      caption: 'Hypnotiq Musiq 1.0',
      category: 'React Native Mobile App',
      difficulty: 7,
      href: '/projects/hypnotiq',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      image: 'https://i.imgur.com/HjTbdr9.gif',
      name: (
        <a
          href={'/projects/hypnotiq'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Hypnotiq
        </a>
      ),

      status: 'v2.0 complete',
    },
    {
      caption: 'Boundz Bookstore',
      category: 'React Web App',
      difficulty: 10,
      href: '/projects/boundzbookstore',
      image: 'https://i.imgur.com/XV1sfOI.gif',
      name: (
        <a
          href={'/projects/boundzbookstore'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Boundz Bookstore
        </a>
      ),
      status: 'complete',
    },
    {
      caption: 'Idle Clicker',
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 6,
      href: '/projects/idleclicker',
      image: 'https://i.imgur.com/KfVcjhN.gif',
      name: (
        <a
          href={'/projects/idleclicker'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Idle Clicker
        </a>
      ),

      status: 'v2 in progress',
    },
    {
      caption: 'Guessing Game',
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 3,
      href: 'projects/guessinggame',
      image: 'https://i.imgur.com/EGYVB8e.gif',
      name: (
        <a
          href={'/projects/guessinggame'}
          style={{
            color: !darkTheme ? 'whitesmoke' : '#ba68c8',
            textDecoration: 'none',
          }}
          target="_blank"
        >
          Guessing Game
        </a>
      ),
      status: 'complete',
    },
  ];

  const header = (
    <div
      className="table-header"
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        borderRadius: '5px',
        color: !darkTheme ? 'whitesmoke' : '#ba68c8',
        padding: '5px',
        textShadow: '1px 1px 1px indigo',
      }}
    >
      See Jones Projects
      <Button
        id="navigateToLearningJournal"
        icon="pi pi-images"
        style={{
          background: !darkTheme
            ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
            : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
          color: !darkTheme ? '#ba68c8' : 'whitesmoke',
        }}
        tooltip="View in my learning journal"
        tooltipOptions={{ position: 'left' }}
      />
    </div>
  );

  const footer = (
    <div
      style={{
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        borderRadius: '5px',
        color: !darkTheme ? 'whitesmoke' : '#ba68c8',
        padding: '10px',
        textShadow: '1px 1px 1px indigo',
      }}
    >
      {' '}
      In total there are {projects ? projects.length : 0} projects.
    </div>
  );

  const ratingBodyTemplate = (rowData) => {
    return (
      <Rating value={rowData.difficulty} readOnly cancel={false} stars={10} />
    );
  };

  useEffect(() => {
    const navigateToLearningJournal = document.getElementById(
      'navigateToLearningJournal'
    );

    const handleNavigationToLearningJournal = () =>
      (window.location.pathname = '/learningjournal');

    navigateToLearningJournal.addEventListener(
      'click',
      handleNavigationToLearningJournal
    );
  });

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
        background: !darkTheme
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
        color: !darkTheme ? 'whitesmoke' : '#ba68c8',
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
              background: !darkTheme
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color: !darkTheme ? 'whitesmoke' : '#ba68c8',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            header="Image"
            body={imageBodyTemplate}
            style={{
              background: !darkTheme
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color: !darkTheme ? 'whitesmoke' : '#ba68c8',
              paddingRight: '4rem',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field="category"
            header="Category"
            style={{
              background: !darkTheme
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color: !darkTheme ? 'whitesmoke' : '#ba68c8',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
          <Column
            field="rating"
            header="Difficulty Level"
            body={ratingBodyTemplate}
            style={{
              background: !darkTheme
                ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
                : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
              color: !darkTheme ? 'whitesmoke' : '#ba68c8',
              textShadow: '1px 1px 1px indigo',
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AllProjects;
