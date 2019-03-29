import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';
import InnerLayoutIdeas from '../Components/InnerLayoutIdeas';

function Login({ session }) {
    return (
            <div>
                <Navbar session={session}/>
                <Side />
                <InnerLayoutIdeas />

            </div>
    );
  }
  
  export default Login;