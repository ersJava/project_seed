import React from 'react';
import './App.css';
import Post from "./Post";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (

  <div className="App"> 
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
     </div>
    </Router>
</div>)

export default App
   
