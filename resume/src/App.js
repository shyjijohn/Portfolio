import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import GalleryPage from './GalleryPage';

function App() {

  return (
    <div className="flex flex-col md:items-center">
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
      {/* <Home/>
      <Skills/>
      <Projects/>
      <Contact/> */}
    </div>
  );
}

export default App;