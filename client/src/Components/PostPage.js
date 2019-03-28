import React from 'react';
import { withRouter } from 'react-router-dom';

import { Query } from 'react-apollo';
import { GET_ONE_POST } from '../queries'

const PostPage = ({ match }) => {
    const { _id } = match.params;
    console.log(_id);
    return(
        <Query query={GET_ONE_POST} variables={{ _id }}>
            {({ data, loading, error}) => {
                if(loading) return <div>Loading</div>
                if (error) return <div>Error</div>
                console.log(data);
                return <div>Post Page</div>
            }}
        </Query>
    )
}

export default withRouter(PostPage);