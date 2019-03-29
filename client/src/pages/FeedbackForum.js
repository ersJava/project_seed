
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../queries'
import { Link } from 'react-router-dom';
import SinglePost from '../Components/SinglePost';

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


               </Query>
               <Link to="/addideas">Add a Post</Link>

            </div>
    );
  }
  
  export default Login;