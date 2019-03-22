exports.resolvers={
    Query: {
        //this is a query for getting all posts 
        //we desctructured post out of context
        getAllPosts: async (root, args, { Post }) => {
            const allPosts = await Post.find();
            return allPosts;
        },
        getAllComments: async (root, args, { Comment }) => {
            const allComments = await Comment.find();
            return allComments;
        }
    },
    Mutation: {
        //this is a mutation that allows you to add more posts
        //we destructured out title content and username from args
        //we destructured post out of ctx
        addPost: async (root, { subject, content, username }, { Post }) => {
            const newPost = await new Post({
                subject,
                content,
                username
            }).save();
            return newPost
        },
        addComment: async (root, { comment, username}, { Comment }) => {
            const newComment = await new Comment ({
                comment, 
                username
            }).save();
            return newComment
        }
    }
};