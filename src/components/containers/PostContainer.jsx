import PropTypes from "prop-types";
import { PostCard } from "../cards/PostCard";
import { ListButtonsPagination } from "./ListButtonsPagination";

export const PostContainer = ({
  posts,
  changePage,
  totalPages,
  currentPage,
  admin
}) => {
  return (
    <div className={`grid my-auto items-center grid-cols-1 gap-4 w-full`}>
      <h2 className="text-2xl font-bold text-sky-800">Articulos</h2>

      {posts && posts.map((post) => <PostCard admin={admin} key={post.id} post={post} />)}
      <ListButtonsPagination
        changePage={changePage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.array.isRequired,
  changePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  admin: PropTypes.bool,
};
