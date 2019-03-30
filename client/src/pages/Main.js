import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';
import InnerLayoutMain from '../Components/InnerLayoutMain';

function Login({ session }) {
    return (
            <div style={{overflow: "hidden",height:"100vh"}}>
                <Navbar session={session}/>
                <div className="ui grid">
               
                <div className="two wide column"><Side /></div>
                <div style={{overflow: "hidden"}} className="fourteen wide column" ><InnerLayoutMain /></div> 

                </div>
            </div>
    );
  }
  
  export default Login;