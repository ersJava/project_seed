import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_START_POSTS } from '../queries/';


const StartPost = () => (
    <Query query={GET_ALL_START_POSTS}>
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

export default StartPost;