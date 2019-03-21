import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://projectseeddev.herokuapp.com/graphql"
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);



