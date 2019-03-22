exports.typeDefs = `

type Post {
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
    email: String!
    favorites: [Post]
}

type Comment {
    _id: ID
    comment: String!
    createdAt: String
    username: String
}

type Query {
    getAllPosts: [Post]
    getAllComments: [Comment]
}

type Mutation {
    addPost(subject: String!, content: String!, username: String): Post
    addComment(comment: String!, username: String): Comment
}

`;