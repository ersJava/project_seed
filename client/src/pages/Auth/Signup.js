import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../../queries';
import Error from '../../Components/Error';

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

class Signup extends Component {
    state ={...initialState };

    clearState = () => {
        this.setState({ ...initialState })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(async ({ data }) => {
            console.log(data);
            localStorage.setItem('token', data.signupUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/main');
        });
    };

    validateForm = () => {
        const { username, email, password, passwordConfirmation } = this.state;
        const isInvalid = !username || !email || !password || password !== passwordConfirmation;
        return isInvalid;
    };

    
    render() {
        const { username, email, password, passwordConfirmation } = this.state;
        
        return (
            <div>
               
               <Mutation mutation={SIGNUP_USER} variables= {{ username, email, password }}>
                   {(signupUser, { data, loading, error}) => {

                       return(
                <form onSubmit={event => this.handleSubmit(event, signupUser)}>
                   
                   <input 
                   type="text" 
                   name="username" 
                   placeholder="Username" 
                   value={username}
                   onChange={this.handleChange}/>

                   <input 
                   type="email" 
                   name="email" 
                   placeholder="Email" 
                   value={email}
                   onChange={this.handleChange}/>

                   <input 
                   type="password" 
                   name="password" 
                   placeholder="Password" 
                   value={password}
                   onChange={this.handleChange}/>
                   
                   <input 
                   type="password" 
                   name="passwordConfirmation" 
                   placeholder="Confirm Password" 
                   value={passwordConfirmation}
                   onChange={this.handleChange}/>

                   <button 
                   type="submit"
                   disabled={loading || this.validateForm()}
                   >
                   Submit
                   </button>
                    
                    {/* Display error message if there is an error */}
                    {error && <Error error={error} />}
                
                </form> 
                       )
                   }}
               
                </Mutation>
            </div>
        );
    }
}

export default withRouter(Signup);