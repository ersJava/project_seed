import React, { Component } from "react";
import logo from "../assets/images/psLogo2.png"


class Seedling extends React.Component{
    render(){
        return(
            <img
            src={logo}
            style={{ height: 250, position: "relative", top: 100 }}
          />
    )
}
}

export default Seedling