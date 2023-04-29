import React from 'react';
import GithubActivityData from './data/GithubActivityData';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';

const GithubActivity = () => {
  const { height, width } = useWindowDimensions();

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
        <a href={data.href} key={index}>
          <iframe
            height={height / 3}
            key={index}
            src={data.src}
            width={width / 3}
          />
        </a>
      ))}
    </div>
  );
};

export default GithubActivity;
