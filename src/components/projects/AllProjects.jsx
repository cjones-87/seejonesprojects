import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primereact/resources/primereact.css';
import './Projects.css';

import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProjectFunctions } from './ProjectFunctions';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';

import ProjectSlideshow from './ProjectSlideshow';
import { ProjectData } from './data/ProjectData';
import './ProjectSlideshow.css';

import IdleClicker from './IdleClicker.png';
import GuessingGame from './GuessingGame.png';
import computerLove from './computerLove.gif';
import BoundzBookstore from './BoundzBookstore.png';
import Hypnotiq from './Hypnotiq.gif';
import portfolioPic from './portfolioPic.png';
import imageNotFound from './imageNotFound.jpeg';

export default class AllProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'See Jones Engineer',
          image: portfolioPic,
          category: 'React Web App',
          difficulty: 8,
          status: 'complete',
        },
        {
          name: 'Computer Love',
          image: computerLove,
          category: 'React Native Mobile App',
          difficulty: 10,
          status: 'complete',
        },
        {
          name: 'Hypnotiq',
          image: Hypnotiq,
          category: 'React Native Mobile App',
          difficulty: 7,
          status: 'v2 in progress',
        },
        {
          name: 'Boundz Bookstore',
          image: BoundzBookstore,
          category: 'React Web App',
          difficulty: 10,
          status: 'complete',
        },
        {
          name: 'Idle Clicker',
          image: IdleClicker,
          category: 'Vanilla JS, HTML, CSS',
          difficulty: 6,
          status: 'v2 in progress',
        },
        {
          name: 'Guessing Game',
          image: GuessingGame,
          category: 'Vanilla JS, HTML, CSS',
          difficulty: 3,
          status: 'complete',
        },
      ],
    };

    this.projectFunctions = new ProjectFunctions();
    this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
    this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
    this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
  }

  componentDidMount() {
    this.projectFunctions
      .getProjectsSmall()
      .then((data) => this.setState({ projects: data }));
  }

  imageBodyTemplate(rowData) {
    return (
      <img
        src={rowData.image}
        onError={(e) => (e.target.src = imageNotFound)}
        alt={rowData.image}
        className="project-image"
        height="75vh"
        width="100vw"
      />
    );
  }

  ratingBodyTemplate(rowData) {
    return (
      <Rating value={rowData.difficulty} readOnly cancel={false} stars={10} />
    );
  }

  statusBodyTemplate(rowData) {
    const isCompleted = false;
    return (
      <span className={isCompleted ? 'completed' : 'version 2 in progress'}>
        {rowData.status}
      </span>
    );
  }

  render() {
    const header = (
      <div className="table-header">
        See Jones Projects
        <Button icon="pi pi-refresh" c={10} />
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
        <div>
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
            <Column
              header="Completion Status"
              body={this.statusBodyTemplate}
            ></Column>
          </DataTable>
        </div>
      </div>
    );
  }
}
