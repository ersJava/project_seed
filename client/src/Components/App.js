import React from 'react';
import './App.css';
import Post from "./Post";
import Login from "../pages/Login"
import Main from "../pages/Main"
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (

  <div className="App"> 
    <Router>
      <div>
        <Route exact path="/" component={Login} />
       <Route exact path="/main" component={Main} />
     </div>
    </Router>
</div>)

export default App
   
