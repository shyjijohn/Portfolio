import { useEffect, useState, useRef } from 'react';
import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {

  return (
    <div className="flex flex-col md:items-center">
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;