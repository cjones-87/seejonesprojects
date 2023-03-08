import React, { useEffect, useState } from 'react';
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
import { ProjectData } from './data/ProjectData';

import {
  IdleClickerPic,
  GuessingGamePic,
  ComputerLovePic,
  browseBooks,
  HypnotiqPic,
  Hypnotiq2GIF,
  portfolioPic,
  IYKYKhome,
  imageNotFound,
} from '../../photos/PhotoExports';

const AllProjects = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const handleError = (e) => (e.target.src = imageNotFound);

  const [projects, setProjects] = useState([
    {
      name: 'Hypnotiq 2.0',
      image: Hypnotiq2GIF,
      category: 'React Native Mobile App',
      difficulty: 10,
      status: 'v3 in progress',
      href: 'https://www.seejonesengineer.com/projects/hypnotiq2',
    },
    {
      name: 'All I Know Is, IYKYK',
      image: IYKYKhome,
      category: 'React Web App',
      difficulty: 8,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/iykyk',
    },
    {
      name: 'See Jones Engineer',
      image: portfolioPic,
      category: 'React Web App',
      difficulty: 9,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/',
    },
    {
      name: 'Computer Love',
      image: ComputerLovePic,
      category: 'React Native Mobile App',
      difficulty: 10,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/computerlove',
    },
    {
      name: 'Hypnotiq',
      image: HypnotiqPic,
      category: 'React Native Mobile App',
      difficulty: 7,
      status: 'v2.0 complete',
      href: 'https://www.seejonesengineer.com/projects/hypnotiq',
    },
    {
      name: 'Boundz Bookstore',
      image: browseBooks,
      category: 'React Web App',
      difficulty: 10,
      status: 'complete',
      href: 'https://www.seejonesengineer.com/projects/boundzbookstore',
    },
    {
      name: 'Idle Clicker',
      image: IdleClickerPic,
      category: 'Vanilla JS, HTML, CSS',
      difficulty: 6,
      status: 'v2 in progress',
      href: 'https://www.seejonesengineer.com/projects/idleclicker',
    },
    {
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
        {/* <img
          // src={rowData.image}
          // onError={(e) => (e.target.src = imageNotFound)}
          // alt={rowData.image}
          // className="project-image"
          // height="75vh"
          // width="100vw"
        /> */}
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
