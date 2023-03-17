import React, { Suspense, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { OrganizationChart } from 'primereact/organizationchart';
import { imageNotFound } from '../../../photos/PhotoExports';
import Spinner from '../../../misc/Spinner';
import IYKYKData from './IYKYKData';

const IYKYK = () => {
  const [selection, setSelection] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const isIframe = [
    'All I Know Is, IYKYK',
    'MVP Goal',
    'Implementations',
    'Minimum Viable Product',
    'Stretch Goals',
    'Contributions',
    'Challenges',
  ];

  const handleError = (event) => {
    event.target.src = imageNotFound;
    event.onerror = null;
    return event;
  };

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const orgChart = IYKYKData;

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
            overflowWrap: 'anywhere',
            width: dimensions.width / 9,
          }}
        >
          <div className="node-header" style={{ fontSize: '1.5em' }}>
            {node.label}
          </div>
          <div className="node-content">
            <div>{node.data.name}</div>

            {isIframe.includes(node.label) ? (
              <Suspense fallback={<Spinner />}>
                <iframe
                  allow="autoplay"
                  onError={handleError}
                  src={node.data.iframe}
                  width={dimensions.width / 10}
                ></iframe>
              </Suspense>
            ) : (
              <LazyLoadImage
                alt={'IYKYK snapshot'}
                effect="blur"
                onError={handleError}
                src={node.data.avatar}
                width={dimensions.width / 10}
              />
            )}

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
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20'
          : 'bg-black-alpha-90'
      }
      style={{
        alignItems: 'center',
        width: dimensions.width,
      }}
    >
      <div style={{ width: dimensions.width + 20 }}>
        <OrganizationChart
          nodeTemplate={nodeTemplate}
          onSelectionChange={(event) => setSelection(event.data)}
          selection={selection}
          selectionMode="multiple"
          style={{ overflow: 'scroll' }}
          value={orgChart}
        />
      </div>
    </div>
  );
};

export default IYKYK;
