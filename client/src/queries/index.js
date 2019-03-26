import { gql } from 'apollo-boost';

// Post query

export const GET_ALL_POSTS = gql`
    query{
        getAllPosts {
            _id
            subject
            content
            createdAt
            username
        }
    }
`;

// Project query
export const GET_ALL_PROJECTS = gql`
    query{
        getAllProjects {
            _id
            title
            githubRepo
            deployLink
            screenshot
            description
            username
        }
    }
`

// User query

export const GET_CURRENT_USER = gql`
    query {
        getCurrentUser {
            username
            email
        }
    }
`

// User mutations

export const SIGNIN_USER = gql`
    mutation($username: String!, $password: String!) {
        signinUser(
            username: $username,
            password: $password
        ) {
            token
        }
    }
`

export const SIGNUP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!) {
        signupUser(
            username: $username,
            email: $email,
            password: $password
        ) {
            token
        }
    }
`;