import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';
import InnerLayoutMain from '../Components/InnerLayoutMain';

function Login({ session }) {
    return (
            <div>
                <Navbar session={session}/>
                <Side />
                <InnerLayoutMain />

            </div>
    );
  }
  
  export default Login;