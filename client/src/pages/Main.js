import React from 'react';
import Navbar from '../Components/Navbar';
// import Sidebar from '../Components/Sidebar';
import Cards from "../Components/Card";


function Login() {
    return (
            <div>
                <Navbar />
                {/* <Sidebar/> */}
                <div><h1>FEATURED PROJECTS OF THE MONTH</h1></div>
                <div class="ui container stackable two column grid">
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div><div class="column">
                <div class="ui segment"><Cards/></div>
                </div><div class="column">
                <div class="ui segment"><Cards/></div>
                </div><div class="column">
                <div class="ui segment"><Cards/></div>
                </div><div class="column">
                <div class="ui segment"><Cards/></div>
                </div><div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                </div>
            </div>
    );
  }
  
  export default Login;