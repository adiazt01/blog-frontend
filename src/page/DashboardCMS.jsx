import { useContext } from "react";
import { PostContext } from "../context/PostsContext";
import { LayoutCMS } from "../layout/LayoutCMS";
import { Outlet } from "react-router-dom";

import { PostContainer } from "../components/containers/PostContainer";

export const DashboardCMS = () => {
  const { posts, changePage, totalPages, currentPage } = useContext(PostContext);

  return (
    <LayoutCMS>
      <div className="grid my-auto px-2 items-center grid-cols-1 gap-4 w-full">
        <div className="grid my-auto px-4 items-center grid-cols-1 gap-8 w-full">
        <PostContainer
          changePage={changePage}
          posts={posts}
          admin={true}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        </div>
      </div>
      <Outlet />
    </LayoutCMS>
  );
};
