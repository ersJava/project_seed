import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import AboutSection from '../Components/AboutSection';
import '../Components/App.css';


function About({ session }) {
    return (
            <div style={{overflow: "hidden",height:"100vh"}}>
                <Navbar session={session}/>
                <div className="ui grid">
               
                <div className="two wide column"><Side /></div>
                <div style={{overflow: "hidden"}} className="fourteen wide column" ><AboutSection /></div> 

                </div>
            </div>
    );
  }
  
  export default About; 