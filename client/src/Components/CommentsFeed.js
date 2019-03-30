import React from 'react';

const commentsFeed = () => (

    <div className="ui comments">
  <h3 className="ui dividing header">Comments</h3>
  <div className="comment">

    <div className="content">
      <a className="author">JSON Git</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">
        You are my favorite
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
  <div className="comment">
    <div className="content">
      <a className="author">Rahat</a>
      <div className="metadata">
        <span className="date">Yesterday at 12:30AM</span>
      </div>
      <div className="text">
        <p>Thank you! I be skylin'!</p>
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
    <div className="comments">
      <div className="comment">
        <div className="content">
          <a className="author">Beth</a>
          <div className="metadata">
            <span className="date">Just now</span>
          </div>
          <div className="text">
            My favorite beer is APIs. YUM!
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="comment">
    <div className="content">
      <a className="author">Shohan</a>
      <div className="metadata">
        <span className="date">5 days ago</span>
      </div>
      <div className="text">
        Unfortunately, I am not available to help as I can't read error messages. Sowwie!
      </div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
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
