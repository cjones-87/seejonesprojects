import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from './components/projects/AllProjects';
import LearningJournalTimeline from './components/timelines/LearningJournalTimeline';
import ResumeTimeline from './components/timelines/ResumeTimeline';
import AboutMe from './components/aboutMe/AboutMe';
import ContactForm from './components/contactMe/ContactForm';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/learningjournal" element={<LearningJournalTimeline />} />
        <Route path="/resume" element={<ResumeTimeline />} />
        <Route path="/contactme" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
