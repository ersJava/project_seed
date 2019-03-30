import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';
import InnerLayoutMain from '../Components/InnerLayoutMain';

function Login({ session }) {
    return (
            <div>
                <Navbar session={session}/>
                <div className="ui grid">
               
                <div className="four wide column"><Side /></div>
                <div className="ten wide column"><InnerLayoutMain /></div> 

                </div>
            </div>
    );
  }
  
  export default Login;