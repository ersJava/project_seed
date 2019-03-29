import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import {ADD_POST} from '../queries'
import Error from '../Components/Error';

class AddIdeasPost extends Component {
    state = {
        subject: '',
        content: '',
        username: ''
    };

    componentDidMount(){
        this.setState({
            username: this.props.session.getCurrentUser.username
        })
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    validateForm = () => {
        const { subject, content, username } = this.state;
        const isInvalid = !subject || !content || !username;
        return isInvalid
    }

    handleSubmit = (event, addPost) => {
        event.preventDefault();
        addPost().then( ({ data }) => {
            console.log(data);
            this.props.history.push("/ideas");
        })
    }
    render() {
        const { subject, content, username } = this.state;
        return(
            <Mutation mutation={ADD_POST} variables= {{ subject, content, username }}>
            {(addPost, {data, loading, error}) => {
                
                
                return (
            <div>
                <h2>Add Post</h2>
                <form onSubmit={event => this.handleSubmit(event, addPost)}>
                    <input type="text" name="subject" placeholder="Post Title" onChange={this.handleChange} value= {subject}/>
                    <textarea name="content" cols="30" rows="10" placeholder="Post Body" onChange={this.handleChange} value= {content}></textarea>
                    <button disabled={loading || this.validateForm()} type="submit">Submit</button>
                    {error && <Error error={error} />}
                </form>
                
            </div>
        );
            }}
        
        </Mutation>
        )
        
    }
}

export default withRouter(AddIdeasPost);