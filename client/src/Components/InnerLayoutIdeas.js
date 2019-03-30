import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../queries'
import SinglePost from './SinglePost';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class FeedbackForum extends Component {
    
    render() {
        return (
            <div style={{overflow: "auto",height:"95vh"}}>
                <Container>
                <br></br>
               <h1>PROJECT IDEAS <i class="lightbulb outline icon"></i></h1>
               <p>Share your project ideas or get help and feedback!</p>
                    </Container>
                     <Link to="/addideas">Add a Post</Link>
                     
               <Query query={GET_ALL_POSTS} fetchPolicy="network-only">
                {({data,loading,error}) => {
                    if(loading) return <div>Loading</div>;
                    if (error) return <div>Error</div>;
                    console.log(data);
                    return (<div >{data.getAllPosts.map(post => 
                    <SinglePost {...post}/>
                    )}</div>)
                }}

               </Query>
            </div>
        );
    }
}

export default FeedbackForum;
