import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SearchResult = ({ result, setInputFocused }) => {
  const { id, title } = result;
  return (
    <Link
      to={`/blog/${id}`}
      className="block px-4 py-2 hover:bg-gray-100 text-left truncate border-b border-gray-100 text-gray-900 font-medium hover:text-gray-700"
      onClick={() => setInputFocused(false)}
    >
      {title}
    </Link>
  );
};

SearchResult.propTypes = {
  result: PropTypes.object.isRequired,
  setInputFocused: PropTypes.func.isRequired,
};
