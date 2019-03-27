import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import withSession from './Components/withSession';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({
      uri: "https://projectseeddev.herokuapp.com/graphql",
      fetchOptions: {
        credentials: "include"
      },
      request: operation => {
          const token = localStorage.getItem("token");
          operation.setContext({
            headers: {
              authorization: token
            }
          });
  },
  onError: ({ networkError }) => {
    if (networkError){
      console.log('Network Error', networkError);
    }
  }
});

const AppWithSession = withSession(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);



