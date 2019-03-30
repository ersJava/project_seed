import React from 'react';
import { withRouter } from 'react-router-dom';

import { Query } from 'react-apollo';
import { GET_ONE_POST } from '../queries'

const PostPage = ({ match }) => {
    const { _id } = match.params;
    
    return(
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
                    <button>Like</button>
                    <button>Delete</button>
                </div>)
            }}
        </Query>
    )
}

export default withRouter(PostPage);