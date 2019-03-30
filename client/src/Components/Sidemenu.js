import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import Seedling from "../Components/Seedling"
import { Link } from 'react-router-dom';

const Side= () => (

  

  <div className="sideMenu">
   <div className="customItem">
   <i class="users icon"></i> &nbsp;
    Start A Team 
   </div>
   <div className="customItem">
   <i class="child icon"></i> &nbsp;
   Join A Team
   </div>
   <div className="customItem">
   <i class="lightbulb outline icon"></i> &nbsp;
   
   Post A Project Idea
   </div>
  </div>
  
    
)

export default Side

