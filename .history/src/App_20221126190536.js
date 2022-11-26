import React from 'react';
import './App.css';
import $ from 'jquery';

//import scripts from './scripts/scripts';

//Components:

import Header from './components/Header';
import StartGame from './components/StartGame';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <StartGame />
      <Footer />
    </div>
  );
}

export default App;
