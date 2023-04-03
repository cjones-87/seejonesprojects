import React, { useEffect, useState } from 'react';
import GithubActivityData from './data/GithubActivityData';

const GithubActivity = () => {
  const [dimensions, setDimensions] = useState({
    height: innerHeight,
    width: innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ height: innerHeight, width: innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      className={
        localStorage.getItem('lightMode') === 'true'
          ? 'bg-black-alpha-20 App card'
          : 'bg-black-alpha-90 App card'
      }
      style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {GithubActivityData.map((data, index) => (
        <a href={data.href}>
          <iframe
            height={dimensions.height / 3}
            src={data.src}
            width={dimensions.width / 3}
          />
        </a>
      ))}
    </div>
  );
};

export default GithubActivity;
