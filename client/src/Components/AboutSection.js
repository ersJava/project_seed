import React, { Component } from "react";
import Rahat from "../assets/images/Rahat.png"
import Beth from "../assets/images/Beth.png"
import Shohan from "../assets/images/Shohan.png"
import Jason from "../assets/images/Jason.png"

class AboutSection extends Component{
    render(){
        return(
          <div className="four column aboutTeam " style={{overflow: "auto",height:"95vh"}}>
             
              <div className="aboutTeamHeader"><h1> Meet The Team</h1></div>
              <div className="imageHolder"><img src={Rahat} style={{ height: 250, position: "relative", top: 30,paddingRight:20 }}/><br></br><div className="namePlace"><h2>RAHAT CHOWDHURY</h2><br></br>Back End Developer and Project Manager</div></div>

            <div className="imageHolder"><img src={Shohan} style={{ height: 250, position: "relative", top: 30,paddingRight:20 }}/><br></br><div className="namePlace"><h2>ASHRAFUL MALLIK</h2><br></br>Front End Developer and Designer</div></div>

            <div className="imageHolder"><img src={Beth} style={{ height: 250, position: "relative", top: 30,paddingRight:20 }}/><br></br><div className="namePlace"><h2>BETH SERGEANT</h2><br></br>Front End Developer and Communications </div></div>

            <div className="imageHolder"><img src={Jason} style={{ height: 250, position: "relative", top: 30,paddingRight:20 }}/><br></br><div className="namePlace"><h2>JASON ZHENG</h2><br></br>Back End Developer  <br></br><br></br></div></div>
             <div className="hrDiv"><hr></hr></div>
            <div className="aboutSection"> <b>Project Seed</b> is an open source, friendly, online community for new developers who want to find others like them and work together on creating new projects. Users can start new teams or join existing ones to create projects and gain experience in the tech stack of their choice. </div>

            <div className="aboutSection"> <h3>Technologies Used</h3>React, Express, Mongo DB, Node, GraphQL, Apollo, JWT </div>

           
            
 
</div>
           
            
            
             
        


        
    )
}
}

export default AboutSection