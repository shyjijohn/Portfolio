import { useEffect, useState, useRef } from 'react';
import './App.css';
import Home from './Pages/Home';

function App() {

  return (
    <div className="flex flex-col justify-between items-center">
      <Home/>
    </div>
  );
}

export default App;