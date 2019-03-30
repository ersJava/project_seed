import React, { Component } from 'react';
import withSession from './withSession';
import { Mutation } from 'react-apollo';
import { LIKE_POST } from '../queries';

class Like extends Component {
    state = {
        username: ""
    }

    componentDidMount(){
        if(this.props.session.getCurrentUser){
            const { username } = this.props.session.getCurrentUser;
            this.setState({ username }) 
        }
    }

    handleLike = (likePost) => {
        likePost().then(({ data }) => {
            console.log(data);
        })
    }

    render() {
        const { username } = this.state;
        const { _id } = this.props;
        return(
            <Mutation mutation={LIKE_POST} variables={{_id, username}}>
            {likePost => {

                return username && <span onClick={() => this.handleLike(likePost)}>Like</span>
            }}
            
            </Mutation>
        )
        
        
    }
}

export default withSession(Like);