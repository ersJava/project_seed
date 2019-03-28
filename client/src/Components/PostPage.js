import React from 'react';
import { withRouter } from 'react-router-dom';

const PostPage = ({ match }) => {
    const { _id } = match.params;
    console.log(_id);
    return(
        <div>Post Page</div>
    )
}

export default withRouter(PostPage);