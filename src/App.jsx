import React, { useState } from 'react';
import './index.css';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';

import { Route, Routes, useNavigate } from 'react-router-dom';

import { recognition } from './api/VoiceRecognition';

import AllProjects from './components/projects/AllProjects';
import LearningJournalTimeline from './components/timelines/LearningJournalTimeline';
import AboutMe from './components/aboutMe/AboutMe';
import ContactForm from './components/contactMe/ContactForm';
import Resume from './components/resume/Resume';
import LandingPage from './components/home/LandingPage';
import Home from './components/home/Home';
import PlayGames from './components/games/PlayGames';
import GuessingGame from './components/projects/GuessingGame/GuessingGame';
import IdleClicker from './components/projects/IdleClicker/IdleClicker';
import BoundzBookstore from './components/projects/BoundzBookstore/BoundzBookstore';
import Hypnotiq from './components/projects/Hypnotiq/Hypnotiq';
import Hypnotiq2 from './components/projects/Hypnotiq2/Hypnotiq2';
import ComputerLove from './components/projects/ComputerLove/ComputerLove';
import SeeJonesEngineer from './components/projects/SeeJonesEngineer/SeeJonesEngineer';
import IYKYK from './components/projects/IYKYK/IYKYK';
import PageNotFound404 from './components/error/PageNotFound404';

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
      <Navbar />
      <Routes>
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
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
