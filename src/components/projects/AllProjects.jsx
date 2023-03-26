import React, { Suspense, useEffect, useState } from 'react';
import {
  IdleClickerPic,
  GuessingGamePic,
  browseBooks,
  portfolioPic,
  imageNotFound,
} from '../../photos/PhotoExports';
import ProjectSlideshow from './ProjectSlideshow';
import Spinner from '../../misc/Spinner';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { ProjectData } from './data/ProjectData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectsCSS/Projects.css';
import './ProjectsCSS/ProjectSlideshow.css';

const AllProjects = () => {
  const handleError = (e) => {
    e.target.src = imageNotFound;
    e.onerror = null;
    return e;
  };

  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const [projects] = useState([
    {
      id: 0,
      name: (
        <a
          href={'/projects/hypnotiq2'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          Hypnotiq 2.0
        </a>
      ),
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      category: 'React Native Mobile App',
      difficulty: 10,
      status: 'v3 in progress',
      href: '/projects/hypnotiq2',
    },
    {
      id: 1,
      name: (
        <a
          href={'/projects/iykyk'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          All I Know Is, IYKYK
        </a>
      ),
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      category: 'React Web App',
      difficulty: 8,
      status: 'complete',
      href: '/projects/iykyk',
    },
    {
      id: 2,
      name: (
        <a
          href={'/projects/seejonesengineer'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          See Jones Engineer
        </a>
      ),
      image: portfolioPic,
      category: 'React Web App',
      difficulty: 9,
      status: 'complete',
      href: '/',
    },
    {
      id: 3,
      name: (
        <a
          href={'/projects/computerlove'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          Computer Love
        </a>
      ),
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      category: 'React Native Mobile App',
      difficulty: 10,
      status: 'complete',
      href: '/projects/computerlove',
    },
    {
      id: 4,
      name: (
        <a
          href={'/projects/hypnotiq'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          Hypnotiq
        </a>
      ),
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      category: 'React Native Mobile App',
      difficulty: 7,
      status: 'v2.0 complete',
      href: '/projects/hypnotiq',
    },
    {
      id: 5,
      name: (
        <a
          href={'/projects/boundzbookstore'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          Boundz Bookstore
        </a>
      ),
      image: browseBooks,
      category: 'React Web App',
      difficulty: 10,
      status: 'complete',
      href: '/projects/boundzbookstore',
    },
    {
      id: 6,
      name: (
        <a
          href={'/projects/idleclicker'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          Idle Clicker
        </a>
      ),
      image: IdleClickerPic,
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 6,
      status: 'v2 in progress',
      href: '/projects/idleclicker',
    },
    {
      id: 7,
      name: (
        <a
          href={'/projects/guessinggame'}
          style={{ color: 'whitesmoke', textDecoration: 'none' }}
          target="_blank"
        >
          Guessing Game
        </a>
      ),
      image: GuessingGamePic,
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 3,
      status: 'complete',
      href: 'projects/guessinggame',
    },
  ]);

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerWidth, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const imageBodyTemplate = (rowData) => {
    return (
      <a href={rowData.href} target="_blank">
        {rowData.iframe ? (
          <div>
            <Suspense fallback={<Spinner />}>
              <iframe
                allow="autoplay"
                className={'project-image'}
                height={dimensions.height / 10}
                onError={handleError}
                src={rowData.iframe}
                style={{
                  backgroundColor: '#cccccc',
                  border: 0,
                  borderRadius: 25,
                  padding: '5px',
                }}
                width={dimensions.width / 10}
              />
            </Suspense>
          </div>
        ) : (
          <LazyLoadImage
            alt={rowData.image}
            className={'project-image'}
            effect="blur"
            height={dimensions.height / 10}
            onError={handleError}
            src={rowData.image}
            style={{
              backgroundColor: '#cccccc',
              borderRadius: 25,
              padding: '5px',
            }}
            width={dimensions.width / 10}
          />
        )}
      </a>
    );
  };

  const ratingBodyTemplate = (rowData) => {
    return (
      <Rating value={rowData.difficulty} readOnly cancel={false} stars={10} />
    );
  };

  const header = (
    <div className="table-header">
      See Jones Projects
      <a href="/learningJournal" target="_blank">
        <Button
          icon="pi pi-images"
          tooltip="View in my learning journal"
          tooltipOptions={{ position: 'left' }}
        />
      </a>
    </div>
  );
  const footer = `In total there are ${
    projects ? projects.length : 0
  } projects.`;

  return (
    <div
      className="datatable-project"
      style={{
        color: 'white',
        textShadow: '2px 2px 2px #01020E',
        paddingTop: '1rem',
        width: dimensions.width,
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <ProjectSlideshow slides={ProjectData} />
      </div>
      <div className="card">
        <DataTable
          value={projects}
          header={header}
          footer={footer}
          responsiveLayout="scroll"
        >
          <Column field="name" header="Title"></Column>
          <Column
            header="Image"
            body={imageBodyTemplate}
            style={{ paddingRight: '4rem' }}
          ></Column>
          <Column field="category" header="Category"></Column>
          <Column
            field="rating"
            header="Difficulty Level"
            body={ratingBodyTemplate}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AllProjects;
