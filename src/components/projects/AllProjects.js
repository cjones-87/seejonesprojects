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
import ProjectGallery from './ProjectGallery';

export default class AllProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'See Jones Engineer',
          image:
            'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          category: 'React Web App',
          difficulty: 9,
          status: 'complete',
        },
        {
          name: 'Computer Love',
          image:
            'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          category: 'Mobile App',
          difficulty: 10,
          status: 'complete',
        },
        {
          name: 'Hypnotiq',
          image:
            'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          category: 'Mobile App',
          difficulty: 7,
          status: 'complete',
        },
        {
          name: 'Boundz Bookstore',
          image:
            'https://image.unsplash.com/photo-1608999383953-d61f5d9c1ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
          category: 'React Web App',
          difficulty: 10,
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
        src={`images/project/${rowData.image}`}
        onError={(e) =>
          (e.target.src =
            'https://images.unsplash.com/photo-1611890798517-07b0fcb4a811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')
        }
        alt={rowData.image}
        className="project-image"
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
      <span className={isCompleted ? 'completed' : 'false'}>
        long-term/in-progress
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
      <div className="datatable-project">
        <div>
          <ProjectGallery />
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
              header="Difficulty Level"
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
