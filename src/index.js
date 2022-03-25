import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from './components/projects/AllProjects';
import LearningJournalTimeline from './components/timelines/LearningJournalTimeline';
import Resume from './components/timelines/Resume';
import AboutMe from './components/aboutMe/AboutMe';
import ContactForm from './components/contactMe/ContactForm';
import LandingPage from './components/home/LandingPage';
import Home from './components/home/Home';
import PlayGames from './components/games/PlayGames';
import GuessingGame from './components/individualProjects/GuessingGame';
import IdleClicker from './components/individualProjects/IdleClicker';
import BoundzBookstore from './components/individualProjects/BoundzBookstore';
import Hypnotiq from './components/individualProjects/Hypnotiq';
import ComputerLove from './components/individualProjects/ComputerLove';
import SeeJonesEngineer from './components/individualProjects/SeeJonesEngineer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
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
        <Route path="/projects/seejonesengineer" element={<IdleClicker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
