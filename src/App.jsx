import React, { lazy, Suspense, useState } from 'react';
import './index.css';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { recognition } from './api/VoiceRecognition';

const Navbar = lazy(() => import('./components/home/Navbar'));
const Footer = lazy(() => import('./components/home/Footer'));
const AllProjects = lazy(() => import('./components/projects/AllProjects'));
const LearningJournalTimeline = lazy(() =>
  import('./components/timelines/LearningJournalTimeline')
);
const AboutMe = lazy(() => import('./components/aboutMe/AboutMe'));
const ContactForm = lazy(() => import('./components/contactMe/ContactForm'));
const Resume = lazy(() => import('./components/resume/Resume'));
const LandingPage = lazy(() => import('./views/home/LandingPage'));
const Home = lazy(() => import('./components/home/Home'));
const PlayGames = lazy(() => import('./components/games/PlayGames'));
const GuessingGame = lazy(() =>
  import('./components/projects/GuessingGame/GuessingGame')
);
const IdleClicker = lazy(() =>
  import('./components/projects/IdleClicker/IdleClicker')
);
const BoundzBookstore = lazy(() =>
  import('./components/projects/BoundzBookstore/BoundzBookstore')
);
const Hypnotiq = lazy(() => import('./components/projects/Hypnotiq/Hypnotiq'));
const Hypnotiq2 = lazy(() =>
  import('./components/projects/Hypnotiq2/Hypnotiq2')
);
const ComputerLove = lazy(() =>
  import('./components/projects/ComputerLove/ComputerLove')
);
const SeeJonesEngineer = lazy(() =>
  import('./components/projects/SeeJonesEngineer/SeeJonesEngineer')
);
const IYKYK = lazy(() => import('./components/projects/IYKYK/IYKYK'));
const PageNotFound404 = lazy(() =>
  import('./components/error/PageNotFound404')
);

import Spinner from './misc/Spinner';
const Loading = () => (
  <div
    style={{
      left: '50%',
      position: 'fixed',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Spinner />
  </div>
);

const App = () => {
  const navigate = useNavigate();
  const [stopRecording, setStopRecording] = useState(false);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;
    console.log(command);
    if (
      command.includes('go to') ||
      command.includes('navigate to') ||
      command.includes('open') ||
      command.includes('open up')
    ) {
      if (command.includes('index')) {
        navigate('/');
      } else if (command.includes('home') || command.includes('main')) {
        navigate('/home');
      } else if (command.includes('about me') || command.includes('about')) {
        navigate('/aboutme');
      } else if (
        command.includes('learning') ||
        command.includes('learning journal') ||
        command.includes('journal')
      ) {
        navigate('/learningjournal');
      } else if (
        command.includes('projects') ||
        command.includes('portfolio')
      ) {
        navigate('/projects');
      } else if (
        command.includes('interactive') ||
        command.includes('interactive games') ||
        command.includes('games') ||
        command.includes('play') ||
        command.includes('play games')
      ) {
        navigate('/playgames');
      } else if (
        command.includes('resumé') ||
        command.includes('resume') ||
        command.includes('work portfolio') ||
        command.includes('cv') ||
        command.includes('job history')
      ) {
        navigate('/resume');
      } else if (
        command.includes('contact') ||
        command.includes('contact me') ||
        command.includes('hire') ||
        command.includes('hire me')
      ) {
        navigate('/hireme');
      }
    } else if (
      command.includes('stop listening') ||
      command.includes('stop recognition') ||
      command.includes('stop recognizing') ||
      command.includes('stop voice controlling') ||
      command.includes('stop voice control')
    ) {
      recognition.stop();
      setStopRecording(true);
    }
  };

  recognition.onend = () => {
    if (!stopRecording) {
      recognition.start();
    }
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route
            path="/learningjournal"
            element={<LearningJournalTimeline />}
          />
          <Route path="/playgames" element={<PlayGames />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hireme" element={<ContactForm />} />
          <Route path="/projects/guessinggame" element={<GuessingGame />} />
          <Route path="/projects/idleclicker" element={<IdleClicker />} />
          <Route
            path="/projects/boundzbookstore"
            element={<BoundzBookstore />}
          />
          <Route path="/projects/hypnotiq" element={<Hypnotiq />} />
          <Route path="/projects/computerlove" element={<ComputerLove />} />
          <Route
            path="/projects/seejonesengineer"
            element={<SeeJonesEngineer />}
          />
          <Route path="/projects/iykyk" element={<IYKYK />} />
          <Route path="/projects/hypnotiq2" element={<Hypnotiq2 />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>

        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
