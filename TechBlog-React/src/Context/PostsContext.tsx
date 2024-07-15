import { createContext, ReactNode, useState } from "react";
import { Post } from "../models/post.model";
import postsJSON from "../data/posts.json";

interface PostsContextInterface {
  posts: Post[];
}

export const PostsContext = createContext<PostsContextInterface>({
  posts: [],
});

function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>(postsJSON);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

export default PostsProvider;
