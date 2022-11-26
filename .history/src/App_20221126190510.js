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
        $(document).ready(function(){
            let win_height = 0;
            win_height = $(document).height();
            let h_height = $("#header").outerHeight();
            let s1_height = $("#section_1").outerHeight();
            let s2_height = win_height - (h_height + s1_height);
            $('.section_2_wrapper').height(s2_height);
            $(window).resize(function(){
                win_height = $(document).height();
                let h_height = $("#header").outerHeight();
                let s1_height = $("#section_1").outerHeight();
                let s2_height = win_height - (h_height + s1_height);
                $('.section_2_wrapper').height(s2_height);
            });
            $(window).resize();
        });
      <Header />
      <StartGame />
      <Footer />
    </div>
  );
}

export default App;
