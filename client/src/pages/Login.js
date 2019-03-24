import React from "react";
import Cards from "../Components/Card";
import Logo from "../Components/Logo";
import LoginBtn from "../Components/LoginBtn";
import { Query } from 'react-apollo';
import { GET_ALL_PROJECTS  } from "../queries";

const Login = () => {
  return (
<div className="App">
    <div className="ui center aligned very padded grid">
      <div className="ten wide white column leftPanel">
        <h1>Start GROWING your skills with Project Seed!</h1>
        <h2>Project Seed is a friendly online community
            for new developers who want to work on awesome projects, start a team 
            or have an exciting idea for a new application!</h2>

       {/* ================= Current Project Grid=================*/}
       <div className = "ui grid "><div className="column two wide"></div>
  {/* fake column to help span it out properly */}
        <div className = "column twelve wide">
           
       <div className="ui two column doubling stackable grid container">

       <Query query={GET_ALL_PROJECTS}>
        {({ data, loading, error}) => {
          if (loading) return <div>Loading</div>
          if (error) return <div>Error</div>
          console.log(data);
          return(
            <p>Whatever</p>
          )
        }}
       
       </Query>
       
       <Cards />
       <Cards />
       <Cards />
       <Cards />
       <Cards />
      <Cards />
      </div>
      </div>
        </div>
        </div>
        
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
