exports.resolvers={
    Query: {
        //this is a query for getting all posts 
        //we desctructured post out of context
        getAllPosts: async (root, args, { Post }) => {
            const allPosts = await Post.find();
            return allPosts;
        }
    },
    Mutation: {
        //this is a mutation that allows you to add more posts
        //we destructured out title content and username from args
        //we destructured post out of ctx
        addPost: async (root, { title, content, username }, { Post }) => {
            const newPost = await new Post({
                title,
                content,
                username
            }).save();
            return newPost
        }
    }
};