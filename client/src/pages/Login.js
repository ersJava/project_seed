import React from "react";
import Cards from "../Components/Card";
import Logo from "../Components/Logo";
import LoginBtn from "../Components/LoginBtn";
import Signin from "../pages/Auth/Signin"

import { Query } from 'react-apollo';
import { GET_ALL_PROJECTS  } from "../queries";


const Login = ({ refetch }) => {
  return (
<div className="App">
    <div className="ui center aligned very padded grid">
      <div className="ten wide white column stackable leftPanel">
     
        <div className="specialheader1"><h1>Start GROWING your skills with Project Seed!</h1></div>
        <div className="specialheader2"><h2>Project Seed is a friendly online community
            for new developers who want to work on awesome projects, start a team 
            or have an exciting idea for a new application!</h2></div>

       {/* ================= Current Project Grid=================*/}
       <div className = "ui grid ">
       <div className="column four wide"></div>
  {/* fake column to help span it out properly */}
        <div className = "column twelve wide">
           
       <div className="ui two column doubling  grid container">

       <Query query={GET_ALL_PROJECTS}>
        {({ data, loading, error}) => {
          if (loading) return <div>Loading</div>
          if (error) return <div>Error</div>
          console.log(data.getAllProjects);
          return( <div className="cardHolder">{data.getAllProjects
            .map(project =><Cards 
              key = {project._id} 
              title={project.title} 
              description={project.description} 
              deployLink={project.deployLink}
              githubRepo={project.githubRepo}
              screenshot={project.screenshot}
            />)}</div>
          )
        }}
       
       </Query>
       
      </div>
      </div>
        </div>
        </div>
        
            <div className="six wide column stackable rightPanel">
              <div className="logoSpace"><Logo/></div>
              
              <div className="loginStyle"><LoginBtn refetch={refetch}/></div>
              <Signin refetch={refetch}/>
              <br></br> 
            </div>
          </div>
          {/* ================= End Panel Layout================= */}
  </div>
  
  );
}

export default Login;
