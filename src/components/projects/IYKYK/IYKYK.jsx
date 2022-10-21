import React from 'react';

import { OrganizationChart } from 'primereact/organizationchart';

import { imageNotFound } from '../../../photos/PhotoExports';
import IYKYKData from './IYKYKData';

export default class IYKYK extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = IYKYKData;

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
