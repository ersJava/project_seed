import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { SIGNUP_USER } from '../queries';
import Error from '../Components/Error';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
}

class LoginBtn extends Component {
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
               <h2>Signup</h2>
               <Mutation mutation={SIGNUP_USER} variables= {{ username, email, password }}>
                   {(signupUser, { data, loading, error}) => {
// 450F42
                       return(
                        <Modal trigger={<Button style={{backgroundColor:"#450F42",color:"white",width:330,height:50}}>SIGN UP</Button>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content image>
                          <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
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
                        </Modal.Content>
                      </Modal>
                
                       )
                   }}
               
                </Mutation>
            </div>
        );
    }
}

export default withRouter(LoginBtn);