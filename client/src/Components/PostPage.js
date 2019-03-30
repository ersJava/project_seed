import React from 'react';
import { withRouter } from 'react-router-dom';

import { Query } from 'react-apollo';
import { GET_ONE_POST } from '../queries';

import Navbar from './Navbar';
import CommentsFeed from './CommentsFeed';

import { Header, Container} from 'semantic-ui-react'

const PostPage = ({ match }) => {
    const { _id } = match.params;
    
    return(
        <Query query={GET_ONE_POST} variables={{ _id }}>
            {({ data, loading, error}) => {
                if(loading) return <div>Loading</div>
                if (error) return <div>Error</div>
                console.log(data);

                return (
                <div>
                    <Navbar/>
                    <br/>
                    <Container>
                    <div className="ui piled segment">
                    <Header as='h3'>Subject: {data.getOnePost.subject}</Header>
                    <Header as='h4'>Author: {data.getOnePost.username}</Header>
                    <Header as='h4'>Created: {data.getOnePost.createdAt}</Header>
                    <Header as='h4'>Post:</Header>
                    <p>{data.getOnePost.content}</p>
                <br/>
                    <div className="ui left labeled button" tabindex="0">
                    <div className="ui basic right pointing label">
                    {data.getOnePost.likes}
                    </div>
                    <div className="ui button">
                    <i className="heart icon"></i> Like
                    </div>
                    </div>
                <br />
                <br />

                    <div class="ui vertical animated button" tabindex="0">
                    <div class="hidden content">Like</div>
                    <div class="visible content">
                    <i class="thumbs up outline icon"></i>
                    </div>
                    </div>
                    
                    <div class="ui animated button" tabindex="0">
                    <div class="visible content">Delete</div>
                    <div class="hidden content">
                     <i class="cut icon"></i>
                    </div>
                    </div>
                    <CommentsFeed/>
                </div>
                    </Container>
                </div>)
            }}
        </Query>
    )
}

export default withRouter(PostPage);