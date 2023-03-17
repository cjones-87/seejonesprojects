import React, { Suspense, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProjectsCSS/Projects.css';
import './ProjectsCSS/ProjectSlideshow.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProjectFunctions } from './ProjectFunctions';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import ProjectSlideshow from './ProjectSlideshow';
import Spinner from '../../misc/Spinner';
import { ProjectData } from './data/ProjectData';
import {
  IdleClickerPic,
  GuessingGamePic,
  browseBooks,
  portfolioPic,
  imageNotFound,
} from '../../photos/PhotoExports';

const AllProjects = () => {
  const iframeIndices = [0, 1, 3, 4];
  const handleError = (e) => {
    e.target.src = imageNotFound;
    e.onerror = null;
    return e;
  };

  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const [projects, setProjects] = useState([
    {
      id: 0,
      name: 'Hypnotiq 2.0',
      iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
      category: 'React Native Mobile App',
      difficulty: 10,
      status: 'v3 in progress',
      href: 'https://www.seejonesengineer.com/projects/hypnotiq2',
    },
    {
      id: 1,
      name: 'All I Know Is, IYKYK',
      iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
      category: 'React Web App',
      difficulty: 8,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/iykyk',
    },
    {
      id: 2,
      name: 'See Jones Engineer',
      image: portfolioPic,
      category: 'React Web App',
      difficulty: 9,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/',
    },
    {
      id: 3,
      name: 'Computer Love',
      iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
      category: 'React Native Mobile App',
      difficulty: 10,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/computerlove',
    },
    {
      id: 4,
      name: 'Hypnotiq',
      iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
      category: 'React Native Mobile App',
      difficulty: 7,
      status: 'v2.0 complete',
      href: 'https://www.seejonesengineer.com/projects/hypnotiq',
    },
    {
      id: 5,
      name: 'Boundz Bookstore',
      image: browseBooks,
      category: 'React Web App',
      difficulty: 10,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/boundzbookstore',
    },
    {
      id: 6,
      name: 'Idle Clicker',
      image: IdleClickerPic,
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 6,
      status: 'v2 in progress',
      href: 'https://www.seejonesengineer.com/projects/idleclicker',
    },
    {
      id: 7,
      name: 'Guessing Game',
      image: GuessingGamePic,
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 3,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/guessinggame',
    },
  ]);

  const projectFunctions = new ProjectFunctions();

  useEffect(() => {
    projectFunctions.getProjectsSmall().then((data) => setProjects(data));

    const handleResize = () =>
      setDimensions({ height: innerWidth, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const imageBodyTemplate = (rowData) => {
    return (
      <a href={rowData.href} target="_blank">
        {iframeIndices.includes(rowData.id) ? (
          <div>
            <Suspense fallback={<Spinner />}>
              <iframe
                allow="autoplay"
                className={'project-image'}
                height={dimensions.height / 10}
                onError={handleError}
                src={rowData.iframe}
                style={{
                  borderRadius: 25,
                  padding: '5px',
                }}
                width={dimensions.width / 10}
              ></iframe>
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
          tooltip="view in my learning journal"
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
