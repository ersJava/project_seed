import React from 'react';
import './App.css';
import Post from "./Post";
import Cards from "./Card";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";


const App = () => (
  <div className="App">
   
    <Post />
    {/* =================Panel Layout =================*/}
    <div className="ui  center aligned padded grid">
            <div className="ten wide white column leftPanel">
              <Cards />
            
            </div>

            <div className="six wide column rightPanel">
              <Logo/>
              <LoginBtn />
              <br></br>
            </div>
          </div>
          {/* =================Panel Layout================= */}
  </div>
)

export default App;
