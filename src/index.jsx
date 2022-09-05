import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from './components/projects/AllProjects';
import LearningJournalTimeline from './components/timelines/LearningJournalTimeline';
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
import PageNotFound404 from './components/error/PageNotFound404';

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
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
