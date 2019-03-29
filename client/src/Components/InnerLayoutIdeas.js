import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../queries'
import SinglePost from '../Components/SinglePost';

class FeedbackForum extends Component {
    
    render() {
        return (
            <div>
               <h1>PROJECT IDEAS</h1>
               <h2>Share your project ideas or get help and feedback!</h2>
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