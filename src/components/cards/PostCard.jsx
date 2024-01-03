import { formatDate, truncateMarkdown } from "../../libs/formaters.js";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";
import { ReadMoreLink } from "../buttons/ReadMoreLink.jsx";
import { Tag } from "../details/Tag.jsx";
import { Link } from "react-router-dom";
import { ModalDeletePost } from "../modals/ModalDeletePost.jsx";

export const PostCard = ({ post, admin }) => {
  const { id, title, createdAt, content, tags } = post;

  return (
    <article
      key={id}
      className="flex flex-col border bg-white rounded shadow-md py-4 px-6"
    >
      <h2 className="text-2xl font-bold text-sky-800">{title}</h2>
      <p className="text-sky-700 mt-3 font-medium">
        Posted on {formatDate(createdAt)}
      </p>
      <p className="text-gray-700 text-lg mt-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {truncateMarkdown(content, 200)}
        </ReactMarkdown>
      </p>
      <div className="mt-4 flex flex-row gap-3 flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div className="flex flex-row justify-end gap-8">
        {admin && (
          <>
            <Link
              to={`/admin/posts/${post.id}`}
              className="mt-8 w-32  gap-1 py-1 rounded flex flex-row items-center justify-center text-lg text-white bg-sky-800 font-semibold bg-black-500 transition duration-300 ease-in-out"
            >
              Edit Post
            </Link>
            <ModalDeletePost id={post.id} />
          </>
        )}
        {!admin && <ReadMoreLink to={`/posts/${post.id}`} />}{" "}
      </div>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  admin: PropTypes.bool,
};
