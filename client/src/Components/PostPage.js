import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Query, Mutation } from 'react-apollo';
import { GET_ONE_POST, DELETE_POST } from '../queries'
import Like from './Like';

class PostPage extends Component {

    handleDelete = (deletePost, history) => {
    const confirmDelete = window.confirm("There is no coming back from this...are you sure you want to delete?");
    if(confirmDelete){
        deletePost().then(({ data }) => {
            console.log(data);
            this.props.history.push("/ideas");
        });
    }
}

    render() {
        const { _id } = this.props.match.params;
        const user = this.props.session.getCurrentUser.username;
        return (
            <Query query={GET_ONE_POST} variables={{ _id }}>
            {({ data, loading, error}) => {
                if(loading) return <div>Loading</div>
                if (error) return <div>Error</div>
                console.log(data);
                return (<div>
                    <p> Subject: {data.getOnePost.subject}</p>
                    <p> Username: {data.getOnePost.username}</p>
                    <p> Created: {data.getOnePost.createdAt}</p>
                    <p> Content: {data.getOnePost.content}</p>
                    <p> Likes: {data.getOnePost.likes}</p>
                    <Like _id={_id}/>
                    <Mutation mutation={DELETE_POST} variables={{ _id }}>
                    {deletePost => (
                        <button
                        onClick={() => this.handleDelete(deletePost)}
                        disabled={user !== data.getOnePost.username}
                        >
                        Delete</button>
                        
                    )}
                    </Mutation>
                </div>)
            }}
        </Query>
        );
    }
}

export default withRouter(PostPage);