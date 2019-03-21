exports.typeDefs = `

type Post {
    _id: ID
    title: String!
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

type Query {
    getAllPosts: [Post]
}

type Mutation {
    addPost(title: String!, content: String!, username: String): Post
}

`;