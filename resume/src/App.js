import { useEffect, useState, useRef } from 'react';
import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';

function App() {

  return (
    <div className="flex flex-col md:items-center">
      <Home/>
      <Skills/>
    </div>
  );
}

export default App;