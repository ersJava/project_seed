import React, { Component } from "react";
import Placeholder from "./Placeholder"

class Cards extends Component{
    render(){
        return(
          <div className="column">
            <div className="ui segment"> 
              <div>
                <div className="ui card fluid">
                  <div className="image">
                    <div><Placeholder screenshot={ this.props.screenshot } /></div>
                  </div>
                  <div className="content">
                    <br></br>
                    <a href={ this.props.deployLink } target="_blank" className="header">{ this.props.title }</a>
                    <div className="meta">
                      <span className="date"></span>
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
             </div>
          </div>


        
    )
}
}

export default Cards