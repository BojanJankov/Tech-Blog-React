import { Post } from "../../models/post.model";
import "./PostCard.css";

interface PostCardProp {
  post: Post;
}

function PostCard({ post }: PostCardProp) {
  return (
    <div className="blog-post">
      <div className="blog-post_img">
        <img src={post.image} alt="Post image" />
      </div>
      <div className="blog-post_info">
        <h1 className="blog-post_title">{post.title}</h1>
        <p className="blog-post_text">{post.description}</p>
        <div className="blog-post_button_and_date">
          <div>
            <button className="blog-post_button">Read More</button>
          </div>
          <div className="blog-post_date">
            <div>
              <small>{post.author}</small>
              <small>{post.date}</small>
            </div>
            <small className="post-rating">{post.rating}⭐</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
