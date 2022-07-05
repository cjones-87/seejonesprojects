import React from 'react';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';

import GuessingGamePic from './photos/GuessingGame.png';
import imageNotFound from './photos/imageNotFound.jpeg';

import { FaNodeJs } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3 } from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

export default class GuessingGame extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: 'Guessing Game',
        className: 'title',
        type: 'title',
        expanded: true,
        data: { name: this.label, avatar: GuessingGamePic },
        children: [
          {
            label: 'MVP Goal',
            className: 'info',
            type: 'info',
            expanded: true,
            data: { name: this.label, avatar: GuessingGamePic },
            children: [
              {
                label: 'Minimum Viable Product',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: GuessingGamePic,
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
                  avatar: GuessingGamePic,
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
            data: { name: this.label, avatar: GuessingGamePic },
            children: [
              {
                label: 'Technologies',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: GuessingGamePic,
                  info: (
                    <span>
                      <FaNodeJs />
                      &nbsp;&nbsp;&nbsp;
                      <ImHtmlFive />
                      &nbsp; &nbsp;&nbsp;
                      <SiCss3 />
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
                  avatar: GuessingGamePic,
                  info: (
                    <div>
                      <p>
                        Guessing Game was constructed & designed using{' '}
                        <ImHtmlFive /> & <SiCss3 />. The logic and data for
                        gameplay was implemented using client-side{' '}
                        <DiJavascript1 />.
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
            data: { name: this.label, avatar: GuessingGamePic },
            children: [
              {
                label: 'Contributions',
                className: 'moreInfo',
                type: 'moreInfo',
                expanded: false,
                data: {
                  name: this.label,
                  avatar: GuessingGamePic,
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
                  avatar: GuessingGamePic,
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
              src={GuessingGamePic}
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
