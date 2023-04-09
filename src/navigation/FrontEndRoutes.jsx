import { lazy } from 'react';
const AllProjects = lazy(() => import('../components/projects/AllProjects'));
const LearningJournalTimeline = lazy(() =>
  import('../components/timelines/LearningJournalTimeline')
);
const AboutMe = lazy(() => import('../components/aboutMe/AboutMe'));
const ContactMe = lazy(() => import('../components/contactMe/ContactMe'));
const Resume = lazy(() => import('../components/resume/Resume'));
const LandingPage = lazy(() => import('../components/landingPage/LandingPage'));
const Home = lazy(() => import('../components/home/Home'));
const PlayGames = lazy(() => import('../components/games/PlayGames'));
const GuessingGame = lazy(() =>
  import('../components/projects/GuessingGame/GuessingGame')
);
const IdleClicker = lazy(() =>
  import('../components/projects/IdleClicker/IdleClicker')
);
const BoundzBookstore = lazy(() =>
  import('../components/projects/BoundzBookstore/BoundzBookstore')
);
const Hypnotiq = lazy(() => import('../components/projects/Hypnotiq/Hypnotiq'));
const Hypnotiq2 = lazy(() =>
  import('../components/projects/Hypnotiq2/Hypnotiq2')
);
const ComputerLove = lazy(() =>
  import('../components/projects/ComputerLove/ComputerLove')
);
const SeeJonesEngineer = lazy(() =>
  import('../components/projects/SeeJonesEngineer/SeeJonesEngineer')
);
const IYKYK = lazy(() => import('../components/projects/IYKYK/IYKYK'));
const PageNotFound404 = lazy(() =>
  import('../components/error/PageNotFound404')
);

const FrontEndRoutes = [
  { element: <LandingPage />, path: '/' },
  { element: <Home />, path: '/home' },
  { element: <AboutMe />, path: '/aboutme' },
  { element: <AllProjects />, path: '/projects' },
  { element: <LearningJournalTimeline />, path: '/learningjournal' },
  { element: <PlayGames />, path: '/playgames' },
  { element: <Resume />, path: '/resume' },
  { element: <ContactMe />, path: '/hireme' },
  { element: <GuessingGame />, path: '/projects/guessinggame' },
  { element: <IdleClicker />, path: '/projects/idleclicker' },
  { element: <BoundzBookstore />, path: '/projects/boundzbookstore' },
  { element: <Hypnotiq />, path: '/projects/hypnotiq' },
  { element: <ComputerLove />, path: '/projects/computerlove' },
  { element: <SeeJonesEngineer />, path: '/projects/seejonesengineer' },
  { element: <IYKYK />, path: '/projects/iykyk' },
  { element: <Hypnotiq2 />, path: '/projects/hypnotiq2' },
  { element: <PageNotFound404 />, path: '*' },
];
export default FrontEndRoutes;
