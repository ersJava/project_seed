import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from './Navbar';
import CommentsFeed from './CommentsFeed';

import { Header, Container} from 'semantic-ui-react'

import { Query, Mutation } from 'react-apollo';
import { GET_ONE_START_POST, DELETE_START_POST } from '../queries'
import Like from './Like';


class StartPostPage extends Component {

    handleDelete = (deleteStartPost, history) => {
    const confirmDelete = window.confirm("There is no coming back from this...are you sure you want to delete?");
    if(confirmDelete){
        deleteStartPost().then(({ data }) => {
            console.log(data);
            this.props.history.push("/ideas");
        });
    }
}

    render() {
        const { _id } = this.props.match.params;
        const user = this.props.session.getCurrentUser.username;
        return (
            <Query query={GET_ONE_START_POST} variables={{ _id }}>
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
                    <Header as='h3'>Subject: {data.getOneStartPost.subject}</Header>
                    <Header as='h4'>Author: {data.getOneStartPost.username}</Header>
                    <Header as='h4'>Created: {data.getOneStartPost.createdAt}</Header>
                    <Header as='h4'>Post:</Header>
                    <p>{data.getOneStartPost.content}</p>
                <br/>
                    <div className="ui left labeled button" tabindex="0">
                    <Like _id={_id}/>
                    </div>
                    <Mutation mutation={DELETE_START_POST} variables={{ _id }}>
                    {deleteStartPost => (
                        <button className="ui blue button"
                        onClick={() => this.handleDelete(deleteStartPost)}
                        disabled={user !== data.getOneStartPost.username}
                        >
                        Delete
                        </button>
       )}
                    </Mutation>
                <br />
                <br />
                    
                   
                    
                  <div className="visible content">
                  
                    <div className="hidden content">
                     
                    </div>
                    </div>
                    <CommentsFeed/>
                
                </div>
                    </Container>

                </div>
                )}}
            </Query>
        );
    }
}

export default withRouter(StartPostPage);