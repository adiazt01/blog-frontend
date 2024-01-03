import PropTypes from "prop-types";
import { formatDate } from "../../libs/formaters";
import { Link } from "react-router-dom";

export const LastPostCard = ({ post }) => {
  return (
    <li className="relative border-s border-sky-200">
      <li className=" ms-4">
        <div className="absolute w-3 h-3 bg-sky-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
        <h3 className="text-xl font-semibold text-sky-800 hover:">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-sky-700">
          {formatDate(post.createdAt)}
        </time>
      </li>
    </li>
  );
};

LastPostCard.propTypes = {
  post: PropTypes.object.isRequired,
};
