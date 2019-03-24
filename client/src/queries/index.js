import { gql } from 'apollo-boost';

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