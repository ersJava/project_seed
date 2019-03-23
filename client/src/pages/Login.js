import React from "react";
import Cards from "../Components/Card";
import Logo from "../Components/Logo";
import LoginBtn from "../Components/LoginBtn";

function Login() {
  return (
<div className="App">
    <div className="ui center aligned very padded grid">
      <div className="ten wide white column leftPanel">
        <h1>Start GROWING your skills with Project Seed!</h1>
        <h2>Project Seed is a friendly online community
            for new developers who want to work on awesome projects, start a team 
            or have an exciting idea for a new application!</h2>

       {/* ================= Current Project Grid=================*/}
       <div className="ui two column doubling stackable grid container">
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
  );
}

export default Login;
