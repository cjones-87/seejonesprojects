import React from 'react';

import Iframe from 'react-iframe';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';
import HypnotiqPic from './photos/Hypnotiq.gif';

import { FaNodeJs, FaReact } from 'react-icons/fa';

import { ImHtmlFive } from 'react-icons/im';

import { SiCss3 } from 'react-icons/si';

import { DiJavascript1 } from 'react-icons/di';

export default class Hypnotiq extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = [
      {
        label: "Hypnotiq",
        className: "title",
        type: "title",
        expanded: true,
        data: { name: this.label, avatar: HypnotiqPic },
        children: [
          {
            label: "MVP Goal",
            className: "info",
            type: "info",
            expanded: true,
            data: { name: this.label, avatar: HypnotiqPic },
            children: [
              {
                label: "Minimum Viable Product",
                className: "moreInfo",
                type: "moreInfo",
                expanded: false,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p> </p> <p></p> <p></p>
                    </div>
                  ),
                },
              },
              {
                label: "Stretch Goals",
                className: "moreInfo",
                type: "moreInfo",
                expanded: true,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
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
            label: "Tech Stack",
            className: "info",
            type: "info",
            expanded: true,
            data: { name: this.label, avatar: HypnotiqPic },
            children: [
              {
                label: "Technologies",
                className: "moreInfo",
                type: "moreInfo",
                expanded: false,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: <span></span>,
                },
              },
              {
                label: "Integration",
                className: "moreInfo",
                type: "moreInfo",
                expanded: true,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p>Hypnotiq was constructed & designed using </p>
                    </div>
                  ),
                },
              },
            ],
          },
          {
            label: "Implementations",
            className: "info",
            type: "info",
            expanded: true,
            data: { name: this.label, avatar: HypnotiqPic },
            children: [
              {
                label: "Contributions",
                className: "moreInfo",
                type: "moreInfo",
                expanded: false,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
                  info: (
                    <div>
                      <p> </p>
                    </div>
                  ),
                },
              },
              {
                label: "Challenges",
                className: "moreInfo",
                type: "moreInfo",
                expanded: true,
                data: {
                  name: this.label,
                  avatar: HypnotiqPic,
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
              src={HypnotiqPic}
              onError={(event) => (event.target.src = { HypnotiqPic })}
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
      <div style={{ textAlign: 'center' }}>
        <Iframe
          url="https://www.youtube.com/embed/uiMUlbcUJeU"
          width="800px"
          height="800px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
        <OrganizationChart
          value={this.orgChart}
          nodeTemplate={this.nodeTemplate}
          selection={this.state.selection}
          selectionMode="multiple"
          onSelectionChange={(event) =>
            this.setState({ selection: event.data })
          }
        />
      </div>
    );
  }
}
