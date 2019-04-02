exports.typeDefs = `

type Post {
    _id: ID
    subject: String!
    content: String!
    createdAt: String
    likes: Int
    username: String
}

type StartPost {
    _id: ID
    subject: String!
    content: String!
    createdAt: String
    likes: Int
    username: String
}


type User {
    _id: ID
    username: String! @unique
    password: String!
    email: String! @unique
    favorites: [Post]
}

type Comment {
    _id: ID
    comment: String!
    createdAt: String
    postID: String!
    username: String!
}

type Project {
    _id: ID
    title: String!
    githubRepo: String!
    deployLink: String!
    screenshot: String!
    description: String!
    username: String
}

type Query {
    getAllPosts: [Post]
    getOnePost(_id: ID!): Post
    getOneStartPost(_id: ID!): StartPost
    getPostComments(postID: ID!): [Comment]
    getAllStartPosts: [StartPost]
    getAllComments: [Comment]
    getAllProjects: [Project]
    getCurrentUser: User
}

type Token {
    token: String!
}

type Mutation {
    addPost(subject: String!, content: String!, username: String): Post

    deletePost(_id: ID): Post

    likePost(_id: ID!, username: String!): Post

    unlikePost(_id: ID!, username: String!): Post

    addStartPost(subject: String!, content: String!, username: String): StartPost

    deleteStartPost(_id: ID): StartPost

    likeStartPost(_id: ID!, username: String!): StartPost

    unlikeStartPost(_id: ID!, username: String!): StartPost

    addPostComment(comment: String!, postID: ID!, username: String!): Comment

    addComment(comment: String!, username: String): Comment

    addProject(title: String!, githubRepo: String!, deployLink: String!, screenshot: String!, description: String!, username: String): Project
    
    signinUser(username: String!, password: String!): Token

    signupUser(username: String!, email: String!, password: String!): Token
}

`;