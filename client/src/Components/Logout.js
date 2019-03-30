import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const handleLogout = (client, history) => {
    localStorage.setItem('token', "");
    client.resetStore();
    history.push('/');
}

const Logout = ({ history }) => (
    <ApolloConsumer>
        {client => {
            console.log(client);
            return(
                <span onClick={() => handleLogout(client, history)}>Logout</span>
            )
        }}
    </ApolloConsumer>
);

export default withRouter(Logout);