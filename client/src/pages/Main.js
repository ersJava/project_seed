import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';

function Login({ session }) {
    return (
            <div>
                <Navbar session={session}/>
                <Side />
            </div>
    );
  }
  
  export default Login;