import React from 'react';
import './App.css';

// import StartPost from "./StartPost";
import Post from "./Post";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";

import { BrowserRouter as Router, Route } from "react-router-dom";
import FeedbackForum from '../pages/FeedbackForum';
import PostPage from './PostPage';
import AddIdeasPost from '../pages/AddIdeasPost';


const App = ({ refetch, session }) => (

  <div className="App"> 
    <Router>
      <div>
        {/* <Route exact path="/StartPost" component={StartPost} /> */}
        <Route exact path="/main" render={() => <Main session={session}/>} />
        <Route exact path="/" render={() => <Login refetch={refetch}/>} />
        {/* <Route exact path="/" render={() => <Login refetch={refetch}/>} /> */}
        <Route exact path="/signin" render={() => <Signin refetch={refetch}/>} />
        <Route exact path="/signup" render={() => <Signup refetch={refetch}/>} />
        <Route exact path="/ideas" component={FeedbackForum} />
        <Route path="/posts/:_id" component={PostPage} />
        <Route exact path="/addIdeas" render={() => <AddIdeasPost session={session}/>}  />
     </div>
    </Router>
</div>)

export default App
   
