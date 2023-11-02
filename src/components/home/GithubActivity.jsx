import { lazy } from 'react';
import useWindowDimensions from '../../../misc/customHooks/useWindowDimensions';
import useTheme from '../../../misc/customHooks/useTheme';
import GithubActivityData from './data/GithubActivityData';

const LazyLoadImage = lazy(() => import('../lazy/LazyLoadImage'));

const GithubActivity = () => {
  const { darkMode } = useTheme();
  const { height, width } = useWindowDimensions();

  return (
    <div
      className={
        !darkMode ? 'bg-black-alpha-20 App card' : 'bg-black-alpha-90 App card'
      }
      style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {GithubActivityData.map((data, index) => (
        <a href={data.href} key={index}>
          {data.image ? (
            <LazyLoadImage
              alt={data.alt}
              height={height / 3}
              src={data.imageSrc}
              width={width / 3}
            />
          ) : (
            <iframe
              alt={data.alt}
              height={height / 3}
              key={index}
              src={data.iframeSrc}
              width={width / 3}
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default GithubActivity;
