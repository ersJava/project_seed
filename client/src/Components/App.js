import React from 'react';
import './App.css';
import Post from "./Post";
import Login from "../pages/Login"
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => (
  <div className="App">

   
   <Router>
      <div>
        
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  </div>
)

export default App
   
