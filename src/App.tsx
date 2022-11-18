import React from 'react';
import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <motion.div></motion.div>
      </header>
    </div>
  );
}

export default App;
