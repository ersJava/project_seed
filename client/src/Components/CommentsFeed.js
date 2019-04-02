import React from 'react';
import SingleComment from './SingleComment';

const commentsFeed = () => (

    <div className="ui comments">
  <h3 className="ui dividing header">Comments</h3>
  <div className="comment">
  <SingleComment />
  </div>
  <form className="ui reply form">
    <div className="field">
      <textarea></textarea>
    </div>
    <div className="ui basic green labeled submit icon button">
      <i className="icon edit"></i> Add Reply
    </div>
  </form>
</div>

)

export default commentsFeed
