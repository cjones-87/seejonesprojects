import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import {
  IdleClickerPic,
  GuessingGamePic,
  browseBooks,
  portfolioPic,
} from '../../../photos/PhotoExports';

export const ProjectData = [
  {
    id: 1,
    iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
    caption: 'Hypnotiq 2.0',
  },
  {
    id: 2,
    iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
    caption: 'IYKYK',
  },
  {
    id: 3,
    iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
    caption: 'Computer Love',
  },
  {
    id: 4,
    iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
    caption: 'Hypnotiq',
  },
  {
    id: 5,
    image: browseBooks,
    caption: 'Boundz Bookstore',
  },
  {
    id: 6,
    image: IdleClickerPic,
    caption: 'Idle Clicker',
  },
  {
    id: 7,
    image: GuessingGamePic,
    caption: 'Guessing Game',
  },
];

export const projects = [
  {
    id: 0,
    name: (
      <a
        href={'/projects/hypnotiq2'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        Hypnotiq 2.0
      </a>
    ),
    iframe: 'https://www.youtube.com/embed/GFI7VYjWjaY',
    category: 'React Native Mobile App',
    difficulty: 10,
    status: 'v3 in progress',
    href: '/projects/hypnotiq2',
  },
  {
    id: 1,
    name: (
      <a
        href={'/projects/iykyk'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        All I Know Is, IYKYK
      </a>
    ),
    iframe: 'https://www.youtube.com/embed/dRMjRk_XCQg',
    category: 'React Web App',
    difficulty: 8,
    status: 'complete',
    href: '/projects/iykyk',
  },
  {
    id: 2,
    name: (
      <a
        href={'/projects/seejonesengineer'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        See Jones Engineer
      </a>
    ),
    image: portfolioPic,
    category: 'React Web App',
    difficulty: 9,
    status: 'complete',
    href: '/',
  },
  {
    id: 3,
    name: (
      <a
        href={'/projects/computerlove'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        Computer Love
      </a>
    ),
    iframe: 'https://www.youtube.com/embed/r6beMntr7nQ',
    category: 'React Native Mobile App',
    difficulty: 10,
    status: 'complete',
    href: '/projects/computerlove',
  },
  {
    id: 4,
    name: (
      <a
        href={'/projects/hypnotiq'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        Hypnotiq
      </a>
    ),
    iframe: 'https://www.youtube.com/embed/Z-RTFL_FYu8',
    category: 'React Native Mobile App',
    difficulty: 7,
    status: 'v2.0 complete',
    href: '/projects/hypnotiq',
  },
  {
    id: 5,
    name: (
      <a
        href={'/projects/boundzbookstore'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        Boundz Bookstore
      </a>
    ),
    image: browseBooks,
    category: 'React Web App',
    difficulty: 10,
    status: 'complete',
    href: '/projects/boundzbookstore',
  },
  {
    id: 6,
    name: (
      <a
        href={'/projects/idleclicker'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        Idle Clicker
      </a>
    ),
    image: IdleClickerPic,
    category: 'Vanilla JS, HTML, CSS',
    difficulty: 6,
    status: 'v2 in progress',
    href: '/projects/idleclicker',
  },
  {
    id: 7,
    name: (
      <a
        href={'/projects/guessinggame'}
        style={{
          color:
            localStorage.getItem('lightMode') === 'true'
              ? 'whitesmoke'
              : '#ba68c8',
          textDecoration: 'none',
        }}
        target="_blank"
      >
        Guessing Game
      </a>
    ),
    image: GuessingGamePic,
    category: 'Vanilla JS, HTML, CSS',
    difficulty: 3,
    status: 'complete',
    href: 'projects/guessinggame',
  },
];

export const ratingBodyTemplate = (rowData) => {
  return (
    <Rating value={rowData.difficulty} readOnly cancel={false} stars={10} />
  );
};

export const header = (
  <div
    className="table-header"
    style={{
      background:
        localStorage.getItem('lightMode') === 'true'
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
      borderRadius: '5px',
      color:
        localStorage.getItem('lightMode') === 'true' ? 'whitesmoke' : '#ba68c8',
      padding: '5px',
      textShadow: '1px 1px 1px indigo',
    }}
  >
    See Jones Projects
    <Button
      id="navigateToLearningJournal"
      icon="pi pi-images"
      style={{
        background:
          localStorage.getItem('lightMode') === 'true'
            ? 'radial-gradient(#434343, rgba(0, 0, 0, 1))'
            : 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))',
        color:
          localStorage.getItem('lightMode') === 'true'
            ? '#ba68c8'
            : 'whitesmoke',
      }}
      tooltip="View in my learning journal"
      tooltipOptions={{ position: 'left' }}
    />
  </div>
);

export const footer = (
  <div
    style={{
      background:
        localStorage.getItem('lightMode') === 'true'
          ? 'radial-gradient(#1a1a1a, rgba(163, 163, 163, 1))'
          : 'radial-gradient(#434343, rgba(0, 0, 0, 1))',
      borderRadius: '5px',
      color:
        localStorage.getItem('lightMode') === 'true' ? 'whitesmoke' : '#ba68c8',
      padding: '10px',
      textShadow: '1px 1px 1px indigo',
    }}
  >
    {' '}
    In total there are {projects ? projects.length : 0} projects.
  </div>
);
