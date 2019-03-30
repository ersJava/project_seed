import React, { Component } from 'react';
import withSession from './withSession';
import { Mutation } from 'react-apollo';
import { LIKE_POST } from '../queries';

class Like extends Component {
    state = {
        username: "",
        liked: false
    }

    componentDidMount(){
        if(this.props.session.getCurrentUser){
            const { username, favorites } = this.props.session.getCurrentUser;
            console.log(favorites);
            this.setState({ username }) 
        }
    }

    handleClick = likePost => {
        this.setState(prevState => ({
                liked: !prevState.liked
            }),
            () => this.handleLike(likePost)
            );
    }

    handleLike = (likePost) => {
        if(this.state.liked){
            likePost().then(async ({ data }) => {
            console.log(data);
            await this.props.refetch();
        })
        } else {
            //unlike
            console.log('unlike');
        }
        
    }

    render() {
        const { liked, username } = this.state;
        const { _id } = this.props;
        return(
            <Mutation mutation={LIKE_POST} variables={{_id, username}}>
            {likePost => {

                return username && <span handleClick={() => this.handleLike(likePost)}>
                {liked ? 'Liked' : 'Like'}
                </span>
            }}
            
            </Mutation>
        )
        
        
    }
}

export default withSession(Like);