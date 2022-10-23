import React from 'react';

import { OrganizationChart } from 'primereact/organizationchart';

import { imageNotFound } from './../../../photos/PhotoExports';

import BoundzBookstoreData from './BoundzBookstoreData';

export default class BoundzBookstore extends React.Component {
  constructor() {
    super();

    this.state = {
      selection: [],
    };

    this.orgChart = BoundzBookstoreData;

    this.nodeTemplate = this.nodeTemplate.bind(this);
  }

  nodeTemplate(node) {
    if (node.type) {
      return (
        <div
          className={
            localStorage.getItem('lightMode') === 'true'
              ? 'bg-black-alpha-00'
              : 'bg-black-alpha-90'
          }
          style={{
            color:
              localStorage.getItem('lightMode') === 'true'
                ? 'whitesmoke'
                : 'rebeccapurple',
          }}
        >
          <div className="node-header">{node.label}</div>
          <div className="node-content" style={{ margin: 5 }}>
            <div>{node.data.name}</div>
            <img
              alt={node.data.avatar}
              src={node.data.avatar}
              onError={(event) => (event.target.src = { imageNotFound })}
              style={{ width: '100px' }}
            />
            <div
              style={{
                color:
                  localStorage.getItem('lightMode') === 'true'
                    ? 'whitesmoke'
                    : 'rebeccapurple',
              }}
            >
              {node.data.info}
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <OrganizationChart
        className={
          localStorage.getItem('lightMode') === 'true'
            ? 'bg-black-alpha-20'
            : 'bg-black-alpha-90'
        }
        nodeTemplate={this.nodeTemplate}
        onSelectionChange={(event) => this.setState({ selection: event.data })}
        selection={this.state.selection}
        selectionMode="multiple"
        value={this.orgChart}
      />
    );
  }
}
