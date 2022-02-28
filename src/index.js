import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';

import SidePanelMenu from './components/menu/SidePanelMenu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from './components/projects/AllProjects';
import LearningJournalTimeline from './components/timelines/LearningJournalTimeline';
import ResumeTimeline from './components/timelines/ResumeTimeline';
import AboutMe from './components/aboutMe/AboutMe';
import ContactForm from './components/contactMe/ContactForm';
import LandingPage from './components/home/LandingPage';
import Home from './components/home/Home';

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
        <Route path="/resume" element={<ResumeTimeline />} />
        <Route path="/contactme" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
    <SidePanelMenu />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
