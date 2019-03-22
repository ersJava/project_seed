import React, { Component } from "react";



class LoginBtn extends React.Component{
    render(){
        return(
    <button className="ui button" style={{height:50,width:350, position: "relative", top: 200, fontSize:20, backgroundColor:"#450f42",color:"white" }}>LOGIN WITH GITHUB</button>
    )
}
}

export default LoginBtn