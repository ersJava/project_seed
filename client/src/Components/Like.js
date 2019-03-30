import React from "react";

import { Mutation } from "react-apollo";
import { LIKE_POST, UNLIKE_POST, GET_ONE_POST } from "../queries";
import withSession from "../Components/withSession";

class Like extends React.Component {
  state = {
    liked: false,
    username: ""
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username, favorites } = this.props.session.getCurrentUser;
      const { _id } = this.props;
      const prevLiked =
        favorites.findIndex(favorite => favorite._id === _id) > -1;
      this.setState({
        liked: prevLiked,
        username
      });
    }
  }

  handleClick = (likePost, unlikePost) => {
    this.setState(
      prevState => ({
        liked: !prevState.liked
      }),
      () => this.handleLike(likePost, unlikePost)
    );
  };

  handleLike = (likePost, unlikePost) => {
    if (this.state.liked) {
      likePost().then(async ({ data }) => {
        // console.log(data);
        await this.props.refetch();
      });
    } else {
      unlikePost().then(async ({ data }) => {
        // console.log(data);
        await this.props.refetch();
      });
    }
  };

  updateLike = (cache, { data: { likePost } }) => {
    const { _id } = this.props;
    const { getPost } = cache.readQuery({
      query: GET_ONE_POST,
      variables: { _id }
    });

    cache.writeQuery({
      query: GET_ONE_POST,
      variables: { _id },
      data: {
        getOnePost: { ...getPost, likes: likePost.likes + 1 }
      }
    });
  };

  updateUnlike = (cache, { data: { unlikePost } }) => {
    const { _id } = this.props;
    const { getPost } = cache.readQuery({
      query: GET_ONE_POST,
      variables: { _id }
    });

    cache.writeQuery({
      query: GET_ONE_POST,
      variables: { _id },
      data: {
        getOnePost: { ...getPost, likes: unlikePost.likes - 1 }
      }
    });
  };

  render() {
    const { liked, username } = this.state;
    const { _id } = this.props;
    return (
      <Mutation
        mutation={UNLIKE_POST}
        variables={{ _id, username }}
        update={this.updateUnlike}
      >
        {unlikePost => (
          <Mutation
            mutation={LIKE_POST}
            variables={{ _id, username }}
            update={this.updateLike}
          >
            {likePost =>
              username && (
                <span
                  className="like-button"
                  onClick={() => this.handleClick(likePost, unlikePost)}
                >
                  {liked ? "Unlike" : "Like"}
                </span>
              )
            }
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default withSession(Like);
