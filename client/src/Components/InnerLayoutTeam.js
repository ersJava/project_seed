import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_START_POSTS } from '../queries'
import SinglePost from './SinglePost';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class FeedbackForum2 extends Component {
    
    render() {
        return (
            <div style={{overflow: "auto",height:"95vh"}}>
                <Container>
                <br></br>
               <h1>CREATE OR FIND A TEAM! <i class="lightbulb outline icon"></i></h1>
               <p>Push your project idea and find teammates or look for a project to work on!</p>
                    </Container>
                    <br/>
                    <button class="ui labeled icon basic green button">
                    <i class="pencil alternate icon"></i>
                    <Link to="/addTeam">Add a Post</Link>
                    </button>
                     
                     
               <Query query={GET_ALL_START_POSTS} fetchPolicy="network-only">
                {({data,loading,error}) => {
                    if(loading) return <div>Loading</div>;
                    if (error) return <div>Error</div>;
                    console.log(data);
                    return (<div >{data.getAllStartPosts.map(post => 
                    <SinglePost {...post}/>
                    )}</div>)
                }}

               </Query>
            </div>
        );
    }
}

export default FeedbackForum2;