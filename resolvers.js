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
        },
        getAllProjects: async (root, args, { Project }) => {
            const allProjects = await Project.find();
            return allProjects
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
        addComment: async (root, { comment, username }, { Comment }) => {
            const newComment = await new Comment ({
                comment, 
                username
            }).save();
            return newComment
        },
        addProject: async (root, { title, githubRepo, deployLink, screenshot, description, username }, { Project }) => {
            const newProject = await new Project({
              title,
              githubRepo,
              deployLink,
              screenshot,
              description,
              username
            }).save();
            return newProject
        }
    }
};