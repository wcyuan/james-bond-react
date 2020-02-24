import React from 'react';
import { Deck } from './Cards.js';
import logo from './logo.svg';
import './App.css';


function App() {
  const d = new Deck();
  d.shuffle();
  console.log(d.deal());
  console.log(d.deal());
  console.log(d.deal());
  console.log(d.deal());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
