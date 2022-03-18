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
        <Route exact path="/playgames" element={<PlayGames />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route path="/hireme" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
