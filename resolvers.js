const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user, secret, expiresIn) => {
    const { username, email } = user;
    return jwt.sign({ username, email}, secret, { expiresIn })
}


exports.resolvers={
    Query: {
        //this is a query for getting all posts 
        //we desctructured post out of context
        getAllPosts: async (root, args, { Post }) => {
            const allPosts = await Post.find();
            return allPosts;
        },
        getAllStartPosts: async (root, args, { StartPost }) => {
            const allStartPosts = await StartPost.find();
            return allStartPosts;
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
        addStartPost: async (root, { subject, content, username }, { StartPost }) => {
            const newStartPost = await new StartPost({
                subject,
                content,
                username
            }).save();
            return newStartPost
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
        },
        signinUser : async (root, { username, password}, { User }) => {
            const user = await User.findOne({ username });
            if(!user){
                throw new Error("Umm...are you sure you signed up?");

            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                throw new Error("Sorry wrong password!");
            }
            return { token: createToken(user, process.env.SECRET, '1hr') };
        },
        //this method is for new users to sign up
        signupUser: async (root, { username, email, password}, { User}) => {
            const user = await User.findOne({ username });
            if (user) {
                throw new Error("Oops looks like you already signed up!"); 
            }
            const newUser = await new User({
                username,
                email,
                password
            }).save();
            return { token: createToken(newUser, process.env.SECRET, '1hr') };
        }
    }
};