import React, { Component } from 'react';
import withSession from './withSession';
import { Mutation } from 'react-apollo';
import { LIKE_POST, GET_ONE_POST } from '../queries';

class Like extends Component {
  state = {
    liked: false,
    username: ''
  }

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

  handleClick = likePost => {
    this.setState(prevState => ({
      liked: !prevState.liked
    }),
    () => this.handleLike(likePost)
    )
  }

  handleLike = likePost => {
    if(this.state.liked) {
    likePost().then(async({ data}) => {
      await this.props.refetch();
    });
  } else {
    //unlike recipe mutation
    console.log("unliked")
  }
  };

  updateLike = (cache, { data : { likePost } }) => {
    const { _id } = this.props;
    const { getOnePost } = cache.readQuery({
       query: GET_ONE_POST, 
       variables: { _id }
      });

    cache.writeQuery({
      query: GET_ONE_POST,
      variables: { _id },
      data: {
        getOnePost: {...getOnePost, likes: likePost + 1}
      }
    })
  }

  render() {
    const { liked, username } = this.state;
    const { _id } = this.props;

   return (<Mutation 
   mutation={LIKE_POST} 
   variables={{_id, username}}
   update={this.updateLike}
   >
   {likePost => {


    return ( username &&
      <button onClick={() => this.handleClick(likePost)} className="ui red button">
      <i className="heart icon"></i> 
      {liked ? 'Following' : 'Follow'}
      </button>
    );
   }}
    
    </Mutation>)
  }
}

export default withSession(Like);