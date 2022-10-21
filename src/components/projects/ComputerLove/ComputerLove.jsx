import React from 'react';

import Iframe from 'react-iframe';

import { OrganizationChart } from 'primereact/organizationchart';

import ComputerLoveData from './ComputerLoveData';

export default class ComputerLove extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = ComputerLoveData;
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
              style={{ width: '75px', height: '100px' }}
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
          url="https://www.youtube.com/embed/fmAzDaepIsM"
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
