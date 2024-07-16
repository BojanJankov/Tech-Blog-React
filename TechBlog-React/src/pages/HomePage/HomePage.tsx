import { useContext, useEffect, useState } from "react";
import "./HomePage.css";
import { PostsContext } from "../../Context/PostsContext";
import PostCard from "../../components/PostCard/PostCard";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

function HomePage() {
  const { posts } = useContext(PostsContext);

  const [displayedData, setDisplayedData] = useState(posts);

  let postCount = 5;

  useEffect(() => {
    setDisplayedData(posts.slice(0, postCount));
  }, []);

  const handleShowMore = () => {
    console.log("click");
    postCount += 5;
    setDisplayedData(posts.slice(0, postCount));
  };

  return (
    <section className="HomePage">
      <div className="main-container">
        <section className="main-container">
          <div className="trending-heading-container">
            <h2 className="trending-heading">
              <span>
                <img
                  src="../../../src/assets/only logo.png"
                  alt=""
                  width="20px"
                />
              </span>
              <i>Trending posts</i>
            </h2>
          </div>
          <div className="trending-posts-container">
            {posts
              .filter(
                (post) =>
                  post.rating >= Math.max(...posts.map((post) => post.rating))
              )
              .slice(0, 2)
              .map((post, i) => (
                <PostCard key={i} post={post} />
              ))}
          </div>
          <div className="heading-posts-div">
            <h2 className="main-posts-heading">
              <span>
                <img
                  src="../../../src/assets/only logo.png"
                  alt=""
                  width="20px"
                />
              </span>
              <i>Newest posts</i>
            </h2>
            <div className="main-posts-filters">
              <div className="main-selects-div"></div>
            </div>
          </div>
          <div className="main-posts-button-container">
            <div className="main-posts-container">
              {displayedData
                .sort(
                  (a, b) =>
                    new Date(b.date).valueOf() - new Date(a.date).valueOf()
                )
                .map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
            </div>
            <div className="load-more-button-div">
              <button
                className={
                  posts.length <= displayedData.length
                    ? "hidden"
                    : "load-more-button"
                }
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className="side-container">
        <div className="ad-container-one">
          <img
            src="../assets/images for ad/ad-one.jpg"
            alt="ad image"
            width="260px"
          />
        </div>
        <div className="ad-container-two">
          <img
            src="../assets/images for ad/ad-two.jpg"
            alt="ad image"
            width="260px"
          />
        </div>
        <div className="ad-container-two">
          <img
            src="../assets/images for ad/ad-three.jpg"
            alt="ad image"
            width="260px"
          />
        </div>
        <BackToTopButton />
      </section>
    </section>
  );
}

export default HomePage;
