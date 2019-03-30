
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../queries'
import { Link } from 'react-router-dom';
import SinglePost from '../Components/SinglePost';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';
import InnerLayoutIdeas from '../Components/InnerLayoutIdeas';


function Login({ session, refetch }) {
    return (
      <div style={{overflow: "hidden",height:"100vh"}}>
      <Navbar session={session}/>
      <div className="ui grid">
     
      <div className="two wide column"><Side /></div>
      <div style={{overflow: "hidden"}} className="fourteen wide column" > <InnerLayoutIdeas refetch={refetch}/></div> 
      <Link to="/addideas">Add a Post</Link>
      </div>
  </div>
          
    );
  }
  
  export default Login;