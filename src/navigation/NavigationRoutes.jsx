import React, { lazy } from 'react';
import { Route, Routes as NavigationRoutes } from 'react-router-dom';

const AllProjects = lazy(() => import('../components/projects/AllProjects'));
const LearningJournalTimeline = lazy(() =>
  import('../components/timelines/LearningJournalTimeline')
);
const AboutMe = lazy(() => import('../components/aboutMe/AboutMe'));
const ContactForm = lazy(() => import('../components/contactMe/ContactForm'));
const Resume = lazy(() => import('../components/resume/Resume'));
const LandingPage = lazy(() => import('../views/home/LandingPage'));
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
const Hypnotiq2ProjectDescription = lazy(() =>
  import('../components/projects/Hypnotiq2/Hypnotiq2ProjectDescription')
);

const Routes = () => {
  return (
    <>
      <NavigationRoutes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/learningjournal" element={<LearningJournalTimeline />} />
        <Route path="/playgames" element={<PlayGames />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/hireme" element={<ContactForm />} />
        <Route path="/projects/guessinggame" element={<GuessingGame />} />
        <Route path="/projects/idleclicker" element={<IdleClicker />} />
        <Route path="/projects/boundzbookstore" element={<BoundzBookstore />} />
        <Route path="/projects/hypnotiq" element={<Hypnotiq />} />
        <Route path="/projects/computerlove" element={<ComputerLove />} />
        <Route
          path="/projects/seejonesengineer"
          element={<SeeJonesEngineer />}
        />
        <Route path="/projects/iykyk" element={<IYKYK />} />
        <Route path="/projects/hypnotiq2" element={<Hypnotiq2 />} />
        <Route
          path="/projects/hypnotiq2projectdescription"
          element={<Hypnotiq2ProjectDescription />}
        />
        <Route path="*" element={<PageNotFound404 />} />
      </NavigationRoutes>
    </>
  );
};

export default Routes;
