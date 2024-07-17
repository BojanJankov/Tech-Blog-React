import { useNavigate, useParams } from "react-router-dom";
import "./PostPage.css";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../Context/PostsContext";
import { Post } from "../../models/post.model";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

function PostPage() {
  const { posts, addLike, removeLike } = useContext(PostsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const foundPost = posts.find((post) => post.id === Number(id));

    if (posts.length > 0 && !foundPost) navigate("/not-found");

    if (foundPost) {
      setSelectedPost(foundPost);
    }
  }, [posts, id, navigate]);

  const likeButtonHandler = (selectedPost: Post) => {
    if (selectedPost.likes > 0) {
      removeLike(selectedPost);
    }
    if (selectedPost.likes >= 0 && selectedPost.likes < 1) {
      addLike(selectedPost);
    }

    console.log(selectedPost.likes);
  };

  return (
    <section className="PostPage">
      {selectedPost && (
        <>
          <div className="container_page">
            <div className="post-page-header-container">
              <h1 className="post-page-hader-h1">{selectedPost.title}</h1>
            </div>
            <div>
              <div className="post-page-image-div-container">
                <img
                  src={selectedPost.image}
                  alt="Campfire for Vision Pro"
                  className="main-image"
                />
              </div>
              <div className="post-page-text-div-container">
                <p>{selectedPost.text}</p>
                <p>#{selectedPost.tag}</p>
              </div>
              <div className="post-page-button-container">
                <button
                  className="post-page-like-button"
                  onClick={() => {
                    likeButtonHandler(selectedPost);
                  }}
                >
                  <i
                    className={
                      selectedPost.likes === 1
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                </button>
                <button>
                  <i className="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
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
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="user"
                    />
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
                      This site is procted by reCAPTCHA and the Google privacy
                      policy and Terms of Service apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BackToTopButton />
        </>
      )}
    </section>
  );
}

export default PostPage;
