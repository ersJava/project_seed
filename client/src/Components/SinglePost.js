import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({_id, subject, username, createdAt, content}) => (
<div key={_id}> 
    <Link to={`/posts/${_id}`}><p>Subject: {subject}</p></Link>
    <p>Username: {username}</p>
    <p>Created: {createdAt}</p>
    <p>Content: {content}</p>
    

</div>
)

export default SinglePost