import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import TourlyUIGalleryPage from './Pages/GalleryPage';

function App() {

  return (
    <div className="flex flex-col md:items-center">
       <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Skills/>
            <Projects/>
            <Contact/> 
          </>
          } />
        <Route path="/gallery" element={<TourlyUIGalleryPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;