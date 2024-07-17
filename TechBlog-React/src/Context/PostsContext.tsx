import { createContext, ReactNode, useState } from "react";
import { Post } from "../models/post.model";
import postsJSON from "../data/posts.json";

interface PostsContextInterface {
  posts: Post[];
  theme: string;
  changeTheme: () => void;
  addLike: (selectedPost: Post) => void;
  removeLike: (selectedPost: Post) => void;
}

export const PostsContext = createContext<PostsContextInterface>({
  posts: [],
  theme: "dark",
  changeTheme() {},
  addLike() {},
  removeLike() {},
});

function PostsProvider({ children }: { children: ReactNode }) {
  const mappedJSONData = postsJSON.map((post) => {
    return { ...post, likes: 0 };
  });
  const [posts, setPosts] = useState<Post[]>(mappedJSONData);
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const addLike = (selectedPost: Post) => {
    setPosts((prev) => {
      return prev.map((post) => {
        if (post.id === selectedPost.id) {
          post.likes += 1;
          return post;
        } else {
          return post;
        }
      });
    });
  };

  const removeLike = (selectedPost: Post) => {
    setPosts((prev) => {
      return prev.map((post) => {
        if (post.id === selectedPost.id) {
          if (post.likes !== 0) {
            post.likes -= 1;
            return post;
          } else {
            return post;
          }
        } else {
          return post;
        }
      });
    });
  };

  return (
    <PostsContext.Provider
      value={{ posts, addLike, removeLike, theme, changeTheme }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;
