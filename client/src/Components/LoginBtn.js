import React, { Component } from "react";
import { Link } from 'react-router-dom';



class LoginBtn extends Component{
    render(){
        return(
            <div>
                <Link to ="/signup">
                <button className="ui button" style={{ height: 50, width: 350, position: "relative", top: 200, fontSize: 20, backgroundColor: "#450f42", color: "white" }}>Sign up </button>
                </Link>

                <Link to="signin">
                <button className="ui button" style={{ height: 50, width: 350, position: "relative", top: 200, fontSize: 20, backgroundColor: "#450f42", color: "white" }}>Login</button>
                </Link>
            </div>
    )
}
}

export default LoginBtn