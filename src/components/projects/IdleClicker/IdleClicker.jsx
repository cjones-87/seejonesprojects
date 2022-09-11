import React from 'react';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { OrganizationChart } from 'primereact/organizationchart';
import { imageNotFound } from '../../../photos/PhotoExports';

import IdleClickerData from './IdleClickerData';

export default class IdleClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = IdleClickerData;

    this.nodeTemplate = this.nodeTemplate.bind(this);
  }

  nodeTemplate(node) {
    if (node.type) {
      return (
        <div className="containerDiv">
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
      <div className="containersContainerDiv">
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
