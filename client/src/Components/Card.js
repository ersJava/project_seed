import React, { Component } from "react";
import Placeholder from "./Placeholder"

class Cards extends Component{
    render(){
        return(
          <div className="four column cardHolder">
            {/* ----------------------*/}
            <div className="ui link cards">
  <div className="card cardHolder">
    <div className="image">
    <div className="thumbnailImg"> <Placeholder screenshot={ this.props.screenshot } /></div>
    </div>
    <div className="content">
    <a href={ this.props.deployLink } target="_blank" className="header">{ this.props.title }</a>
      <div className="meta">
        <hr style={{color:"gray",opacity:0.2,width:150,marginLeft:"auto",marginRight:"auto"}}></hr>
      </div>
      <div className="description">
      { this.props.description }
</div>
    </div>
    <div className="extra content">
                    <a href = { this.props.githubRepo } target="_blank">
                      <i className="github icon"></i>
                    </a>
                  </div>
  </div>
 
 
</div>
            {/* ----------------------*/}
            
            
             
          </div>


        
    )
}
}

export default Cards