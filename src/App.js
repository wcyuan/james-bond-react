import React from 'react';
import { Deck } from './Cards.js';
import { CardImages } from './CardImages.js';
import logo from './logo.svg';
import './App.css';


function App() {
  const d = new Deck();
  d.shuffle();
  const c = d.deal();
  console.log(c);
  console.log("suit = " + d.suit(c));
  console.log("value = " + d.value(c));
  const imgs = new CardImages();
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgs.get_image(c)} alt="card" />
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
