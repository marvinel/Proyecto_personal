import React from 'react';
import './assets/App.css';

//components

//import Peliculas from './components/Peliculas';
//import { Route } from 'react-router-dom';
import Router from './Router';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  );
}

export default App;
