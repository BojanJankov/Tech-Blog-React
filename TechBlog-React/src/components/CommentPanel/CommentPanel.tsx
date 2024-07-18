import "./CommentPanel.css";

function CommentPanel() {
  return (
    <div className="comment-post-page-div-container">
      <div className="container_comment">
        <div className="head">
          <h1>COMMENT</h1>
        </div>
        <div>
          <span id="comment">0</span> Comments
        </div>
        <div className="text">
          <p>We are happy to hear from you!</p>
        </div>
        <div className="comments"></div>
        <div className="commentbox">
          <img src="../../assets/comments-photo/user.jpg" alt="" />
          <div className="content">
            <h2>Comment as: </h2>
            <input type="text" placeholder="Enter your name" className="user" />
            <div className="commentinput">
              <input
                type="text"
                placeholder="Enter comment"
                className="usercomment"
              />
              <div className="buttons">
                <button id="publish">PUBLISH</button>
              </div>
            </div>
            <p className="policy">
              This site is procted by reCAPTCHA and the Google privacy policy
              and Terms of Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentPanel;
