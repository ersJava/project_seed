import React from 'react';
import './App.css';
import Post from "./Post";
import Cards from "./Card";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";


const App = () => (
  <div className="App">

    <Post />
    {/* ================= Left Panel Layout =================*/}
    <div className="ui center aligned very padded grid">
      <div className="ten wide white column leftPanel">
        <h1>Start GROWING your skills with Project Seed!</h1>
        <h2>Project Seed is a friendly online community
            for new developers who want to work on awesome projects, start a team 
            or have an exciting idea for a new application!</h2>

       {/* ================= Current Project Grid=================*/}
       <div className="ui three column doubling stackable grid container">
        <div className="column">
          <div className="ui segment"> <Cards/> </div>
        </div>
      <div className="column">
          <div className="ui segment"> <Cards/> </div>
        </div>
      <div className="column">
        <div className="ui segment"> <Cards/> </div>
      </div>
      <div className="column">
        <div className="ui segment"><Cards/> </div>
      </div>
      <div className="column">
        <div className="ui segment"><Cards/> </div>
      </div>
      <div className="column">
      <div className="ui segment"><Cards/> </div>
      </div>
      </div>

        </div>
        {/* ================= Right Panel Layout =================*/}
            <div className="six wide column rightPanel">
              <Logo/>
              <LoginBtn />
              <br></br>
            </div>
          </div>
          {/* ================= End Panel Layout================= */}
  </div>
)

export default App;
