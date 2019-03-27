import React from 'react';
import './App.css';

// import StartPost from "./StartPost";
import Post from "./Post";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";

import { BrowserRouter as Router, Route } from "react-router-dom";


const App = ({ refetch }) => (

  <div className="App"> 
    <Router>
      <div>
        {/* <Route exact path="/StartPost" component={StartPost} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/signin" render={() => <Signin refetch={refetch}/>} />
        <Route exact path="/signup" render={() => <Signup refetch={refetch}/>} />
     </div>
    </Router>
</div>)

export default App
   
