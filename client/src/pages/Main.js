import React from 'react';
import Navbar from '../Components/Navbar';
import Cards from '../Components/Card';
import Side from '../Components/Sidemenu';

function Login() {
    return (
            <div>
                <Navbar />
                <Side />
                <div class="ui container stackable two column grid">
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui segment"><Cards/></div>
                </div>
                </div>
            </div>
    );
  }
  
  export default Login;