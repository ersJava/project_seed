import React, { Component } from "react";
import Placeholder from "./Placeholder"

class Cards extends Component{
    render(){
        return(
          <div className="four column cardHolder">
            {/* ----------------------*/}
            <div class="ui link cards">
  <div class="card cardHolder">
    <div class="image">
    <div className="thumbnailImg"> <Placeholder screenshot={ this.props.screenshot } /></div>
    </div>
    <div class="content">
    <a href={ this.props.deployLink } target="_blank" className="header">{ this.props.title }</a>
      <div class="meta">
        <a>Friends</a>
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