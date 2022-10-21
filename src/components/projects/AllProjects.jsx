import React from 'react';

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
  portfolioPic,
  IYKYK,
  imageNotFound,
} from '../../photos/PhotoExports';

export default class AllProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'All I Know Is, IYKYK',
          image: IYKYK,
          category: 'React Web App',
          difficulty: 7,
          status: 'complete',
          href: 'https://www.seejonesengineer.com/projects/iykyk',
        },
        {
          name: 'See Jones Engineer',
          image: portfolioPic,
          category: 'React Web App',
          difficulty: 8,
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
          status: 'v2 in progress',
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
      ],
    };

    this.projectFunctions = new ProjectFunctions();
    this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
    this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
  }

  componentDidMount() {
    this.projectFunctions
      .getProjectsSmall()
      .then((data) => this.setState({ projects: data }));
  }

  imageBodyTemplate(rowData) {
    return (
      <a href={rowData.href} target="_blank">
        <img
          src={rowData.image}
          onError={(e) => (e.target.src = imageNotFound)}
          alt={rowData.image}
          className="project-image"
          height="75vh"
          width="100vw"
        />
      </a>
    );
  }

  ratingBodyTemplate(rowData) {
    return (
      <Rating value={rowData.difficulty} readOnly cancel={false} stars={10} />
    );
  }

  render() {
    const header = (
      <div className="table-header">
        See Jones Projects
        {/* <Button icon="pi pi-refresh" c={10} /> */}
      </div>
    );
    const footer = `In total there are ${
      this.state.projects ? this.state.projects.length : 0
    } projects.`;

    return (
      <div
        className="datatable-project"
        style={{
          color: 'white',
          textShadow: '2px 2px 2px #01020E',
          paddingTop: '1rem',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <ProjectSlideshow slides={ProjectData} />
        </div>
        <div className="card">
          <DataTable
            value={this.state.projects}
            header={header}
            footer={footer}
            responsiveLayout="scroll"
          >
            <Column field="name" header="Title"></Column>
            <Column header="Image" body={this.imageBodyTemplate}></Column>
            <Column field="category" header="Category"></Column>
            <Column
              field="rating"
              header="Difficulty Level (current)"
              body={this.ratingBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>
    );
  }
}
