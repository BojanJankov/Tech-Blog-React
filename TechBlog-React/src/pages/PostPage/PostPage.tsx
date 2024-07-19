import { useNavigate, useParams } from "react-router-dom";
import "./PostPage.css";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../Context/PostsContext";
import { Post } from "../../models/post.model";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import CommentPanel from "../../components/CommentPanel/CommentPanel";

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
                <p>Author: {selectedPost.author}</p>
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
            <CommentPanel />
          </div>
          <BackToTopButton />
        </>
      )}
    </section>
  );
}

export default PostPage;
