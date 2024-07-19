import { createContext, ReactNode, useState } from "react";
import { Post } from "../models/post.model";
import postsJSON from "../data/posts.json";

interface PostsContextInterface {
  posts: Post[];
  filteredPostsContext: Post[];
  theme: string;
  changeTheme: () => void;
  addLike: (selectedPost: Post) => void;
  removeLike: (selectedPost: Post) => void;
  filterPostsFunc: (
    selectOneValue: string,
    selectTwoValue: string,
    selectThreeValue: string,
    selectFourValue: string
  ) => void;
}

export const PostsContext = createContext<PostsContextInterface>({
  posts: [],
  filteredPostsContext: [],
  theme: "dark",
  changeTheme() {},
  addLike() {},
  removeLike() {},
  filterPostsFunc() {},
});

function PostsProvider({ children }: { children: ReactNode }) {
  const mappedJSONData = postsJSON.map((post) => {
    return { ...post, likes: 0 };
  });
  const [posts, setPosts] = useState<Post[]>(mappedJSONData);
  const [filteredPostsContext, setFilteredPostsContext] =
    useState<Post[]>(posts);
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

  const filterPostsFunc = (
    selectOneValue: string,
    selectTwoValue: string,
    selectThreeValue: string,
    selectFourValue: string
  ) => {
    if (selectOneValue === "date") {
      setFilteredPostsContext((prev) => {
        const copyPosts: Post[] = [...prev];
        if (selectTwoValue === "asc") {
          copyPosts.sort(
            (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
          );
          return copyPosts;
        }
        if (selectTwoValue === "desc") {
          copyPosts.sort(
            (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
          );
          return copyPosts;
        } else {
          return copyPosts;
        }
      });
    }

    if (selectOneValue === "tag") {
      let filteredPosts: Post[] = posts.filter(
        (post) => post.tag === selectThreeValue
      );
      setFilteredPostsContext(filteredPosts);
    }

    if (selectOneValue === "month") {
      let filteredPosts: Post[] = posts.filter(
        (post) => new Date(post.date).getMonth() === Number(selectFourValue)
      );
      setFilteredPostsContext(filteredPosts);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        addLike,
        removeLike,
        theme,
        changeTheme,
        filterPostsFunc,
        filteredPostsContext,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;
