import React, { useEffect, useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { imageNotFound } from '../../../photos/PhotoExports';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import IdleClickerData from './IdleClickerData';

const IdleClicker = () => {
  const [selection, setSelection] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  const handleError = (event) => {
    event.target.src = imageNotFound;
    event.onerror = null;
  };

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ height: innerHeight, width: innerWidth });

    window.addEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  const orgChart = IdleClickerData;

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

            <LazyLoadImage
              alt={'Idle Clicker snapshot'}
              effect="blur"
              onError={handleError}
              src={node.data.avatar}
              width={dimensions.width / 10}
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
      <div
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          width: dimensions.width + 20,
        }}
      >
        <a href="https://mugnificent-coffee-clicker.vercel.app/">
          <h1
            style={{
              color: 'rebeccapurple',
              paddingBottom: '1rem',
              textShadow:
                localStorage.getItem('lightMode') === 'true'
                  ? '1px 1px 1px indigo'
                  : '1px 1px 1px whitesmoke',
            }}
          >
            Idle Clicker
          </h1>
        </a>
        <div style={{ marginBottom: '1.5rem' }}>
          <iframe
            className="myClassname"
            height={dimensions.height / 2}
            id="myId"
            src="https://mugnificent-coffee-clicker.vercel.app/"
            width={dimensions.width / 2}
          />
        </div>
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

export default IdleClicker;
