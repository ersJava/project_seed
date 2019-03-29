import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../queries'
import SinglePost from '../Components/SinglePost';

class FeedbackForum extends Component {
    render() {
        return (
            <div>
               <h3>Project Ideas</h3>
               <h3>Share your project ideas or get help and feedback!</h3>
               <Query query={GET_ALL_POSTS}>
                {({data,loading,error}) => {
                    if(loading) return <div>Loading</div>;
                    if (error) return <div>Error</div>;
                    console.log(data);
                    return (<div>{data.getAllPosts.map(post => 
                    <SinglePost {...post}/>
                    )}</div>)
                }}

               </Query>
            </div>
        );
    }
}

export default FeedbackForum;