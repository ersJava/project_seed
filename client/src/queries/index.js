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

export const GET_ONE_POST = gql`
    query($_id: ID!) {
        getOnePost(_id: $_id) {
             _id
             subject
             content
             createdAt
             likes
            username
            }
        }
    
`


//post mutation

export const ADD_POST = gql`
    mutation($subject: String!, $content: String!, $username: String) {
        addPost(subject: $subject, content: $content, username: $username){
            _id
            subject
            content
            createdAt
            username
        }
    }
`

export const DELETE_POST = gql`
    mutation($_id: ID!) {
        deletePost(_id: $_id){
            _id
        }
    }
`

export const LIKE_POST = gql `
    mutation($_id: ID!, $username: String!) {
        likePost(_id: $_id, username: $username){
            _id
            likes
        }
    }
`

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
`;
// Join/Start Team Query
export const GET_ALL_START_POSTS = gql`
    query {
        getAllStartPosts {
            _id
            subject
            content
            createdAt
            likes
            username
        }
    }
`;
// User query

export const GET_CURRENT_USER = gql`
    query {
        getCurrentUser {
            _id
            username
            email
            favorites
        }
    }
`;

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
`;

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

export const CREATE_POST = gql`
    mutation($subject: String!, $content: String!) {
        addPost(
            subject: $subject,
            content: $content,
        )
    }
`;

export const CREATE_START_POST = gql`
    mutation($subject: String!, $content: String!) {
        addStartPost(
            subject: $subject,
            content: $content,
        )
    }
`;