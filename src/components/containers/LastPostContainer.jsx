import PropTypes from "prop-types";
import { LastPostCard } from "../cards/LastPostCard";

export const LastPostContainer = ({ lastPosts }) => {
  return (
    <div className="flex flex-col mb-12 gap-3">
      <h2 className="text-2xl font-bold text-sky-800">Ultimos articulos</h2>
      <ul className="flex flex-col gap-3">
        {lastPosts.map((post) => (
          <LastPostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

LastPostContainer.propTypes = {
  lastPosts: PropTypes.array.isRequired,
};
