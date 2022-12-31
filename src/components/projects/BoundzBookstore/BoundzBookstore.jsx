import React, { useEffect, useState } from 'react';

import { OrganizationChart } from 'primereact/organizationchart';

import { imageNotFound } from './../../../photos/PhotoExports';

import BoundzBookstoreData from './BoundzBookstoreData';

const BoundzBookstore = () => {
  const [selection, setSelection] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const orgChart = BoundzBookstoreData;

  const nodeTemplate = (node) => {
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
              style={{ width: dimensions.width / 5 }}
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
  };

  return (
    <OrganizationChart
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20'
          : 'bg-black-alpha-90'
      }
      nodeTemplate={nodeTemplate}
      onSelectionChange={(event) => setSelection(event.data)}
      selection={selection}
      selectionMode="multiple"
      style={{ width: dimensions.width * 2 }}
      value={orgChart}
    />
  );
};

export default BoundzBookstore;
