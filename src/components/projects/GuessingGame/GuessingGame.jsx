import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { OrganizationChart } from 'primereact/organizationchart';
import { imageNotFound } from '../../../photos/PhotoExports';
import Iframe from 'react-iframe';

import GuessingGameData from './GuessingGameData';

const GuessingGame = () => {
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
  }, [dimensions.width, dimensions.height, handleError]);

  const orgChart = GuessingGameData;

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
              alt={'Guessing Game snapshot'}
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
        <a href="https://guessing-game-blue.vercel.app/">
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
            Guessing Game
          </h1>
        </a>
        <div style={{ marginBottom: '1.5rem' }}>
          <Iframe
            url="https://guessing-game-blue.vercel.app/"
            width={dimensions.width / 2}
            height={dimensions.height / 2}
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            frameBorder={0}
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

export default GuessingGame;
