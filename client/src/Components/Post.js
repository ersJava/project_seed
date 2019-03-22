import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../queries/';


const Post = () => (
    <Query query={GET_ALL_POSTS}>
        {({ data, loading, error }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error!</div>
            console.log(data);
            return (
                <div></div>
            )
        }}
    </Query>
)

export default Post;