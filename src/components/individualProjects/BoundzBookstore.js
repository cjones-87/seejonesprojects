import React from 'react';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';

import BoundzBookstorePic from './photos/BoundzBookstore/BoundzBookstore.png';
import imageNotFound from './photos/imageNotFound.jpeg';

import { FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import {
  SiCss3,
  SiExpress,
  SiHeroku,
  SiMaterialui,
  SiPostgresql,
  SiRedux,
  SiSequelize,
} from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

export default class BoundzBookstore extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: 'Boundz Bookstore',
        className: 'title',
        type: 'title',
        expanded: true,
        data: { name: this.label, avatar: BoundzBookstorePic },
        children: [
          {
            label: 'MVP Goal',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: BoundzBookstorePic },
            children: [
              {
                label: 'Minimum Viable Product',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: BoundzBookstorePic,
                  info: (
                    <div>
                      <p> </p> <p></p> <p></p>
                    </div>
                  ),
                },
              },
              {
                label: 'Stretch Goals',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: true,
                data: {
                  name: this.label,
                  avatar: BoundzBookstorePic,
                  info: (
                    <div>
                      <p></p>
                      <p></p>
                      <p></p>
                    </div>
                  ),
                },
              },
            ],
          },
          {
            label: 'Tech Stack',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: BoundzBookstorePic },
            children: [
              {
                label: 'Technologies',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: BoundzBookstorePic,
                  info: (
                    <span>
                      <DiJavascript1 />
                      &nbsp;&nbsp;&nbsp;
                      <FaNodeJs />
                      &nbsp;&nbsp;&nbsp;
                      <FaReact />
                      &nbsp;&nbsp;&nbsp;
                      <SiRedux />
                      &nbsp;&nbsp;&nbsp;
                      <SiPostgresql />
                      &nbsp;&nbsp;&nbsp;
                      <SiSequelize />
                      &nbsp;&nbsp;&nbsp;
                      <SiMaterialui />
                      &nbsp;&nbsp;&nbsp;
                      <SiExpress />
                      &nbsp;&nbsp;&nbsp;
                      <SiHeroku />
                      &nbsp;&nbsp;&nbsp;
                      <ImHtmlFive />
                      &nbsp;&nbsp;&nbsp;
                      <SiCss3 />
                      &nbsp;&nbsp;&nbsp;Bcrypt&nbsp;&nbsp;&nbsp;JWT
                    </span>
                  ),
                },
              },
              {
                label: 'Integration',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: true,
                data: {
                  name: this.label,
                  avatar: BoundzBookstorePic,
                  info: (
                    <div>
                      <p>
                        Boundz Bookstore was constructed & designed
                        using&nbsp;&nbsp;&nbsp;
                        <FaReact />
                        &nbsp;&nbsp;&nbsp;
                        <SiRedux />
                        &nbsp;&nbsp;&nbsp;
                        <SiMaterialui />
                        &nbsp;&nbsp;&nbsp;
                        <ImHtmlFive />
                        &nbsp;&nbsp;&nbsp;
                        <SiCss3 />
                        &nbsp;&nbsp;&nbsp;for the front-end & <FaNodeJs />
                        &nbsp;&nbsp;&nbsp; <SiPostgresql />
                        &nbsp;&nbsp;&nbsp;
                        <SiSequelize />
                        &nbsp;&nbsp;&nbsp;
                        <SiExpress />
                        &nbsp;&nbsp;&nbsp;for the back-end.
                      </p>
                    </div>
                  ),
                },
              },
            ],
          },
          {
            label: 'Implementations',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: BoundzBookstorePic },
            children: [
              {
                label: 'Contributions',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: BoundzBookstorePic,
                  info: (
                    <div>
                      <p> </p>
                    </div>
                  ),
                },
              },
              {
                label: 'Challenges',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: true,
                data: {
                  name: this.label,
                  avatar: BoundzBookstorePic,
                  info: (
                    <div>
                      <p></p>
                    </div>
                  ),
                },
              },
            ],
          },
        ],
      },
    ];

    this.nodeTemplate = this.nodeTemplate.bind(this);
  }

  nodeTemplate(node) {
    if (node.type) {
      return (
        <div>
          <div className="node-header">{node.label}</div>
          <div className="node-content" style={{ margin: 5 }}>
            <div>{node.data.name}</div>
            <img
              alt={node.data.avatar}
              src={node.data.avatar}
              onError={(event) => (event.target.src = { imageNotFound })}
              style={{ width: '100px' }}
            />
            <div style={{ color: 'rebeccapurple' }}>{node.data.info}</div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <OrganizationChart
        value={this.orgChart}
        nodeTemplate={this.nodeTemplate}
        selection={this.state.selection}
        selectionMode="multiple"
        onSelectionChange={(event) => this.setState({ selection: event.data })}
      />
    );
  }
}
