import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ReadMoreLink = ({ id }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="mt-8 w-32 gap-1 py-1 rounded flex flex-row items-center shadow-md justify-center text-lg text-white bg-sky-700 font-semibold bg-black-500 transition duration-300 ease-in-out"
    >
      Read more
    </Link>
  );
};

ReadMoreLink.propTypes = {
  id: PropTypes.number.isRequired,
};
