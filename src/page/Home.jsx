import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import { LayoutBlog } from "../layout/LayoutBlog";
import { PostContainer } from "../components/containers/PostContainer";
import { LastPostContainer } from "../components/containers/LastPostContainer";

export const Home = () => {
  const { posts, changePage, totalPages, currentPage, lastPosts } =
    useContext(PostContext);
  return (
    <LayoutBlog>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex md:gap-32 md:flex-row-reverse">
        <LastPostContainer lastPosts={lastPosts} />
        <PostContainer
          changePage={changePage}
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </LayoutBlog>
  );
};
