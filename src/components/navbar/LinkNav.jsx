import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LinkNav = ({ link, mode = "desktop" }) => {
  const { path, name } = link;
  console.log(path);

  if (mode === "mobile") {
    return (
      <li>
        <Link
          to={path}
          className="text-3xl flex flex-row items-center gap-2 font-semibold text-gray-900 hover:text-gray-600"
        >
          <link.icon/>
          {name}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={path}
        className="text-xl flex flex-row items-center gap-2 font-semibold text-gray-900 hover:text-gray-600"
      >
        {name}
      </Link>
    </li>
  );
};

LinkNav.propTypes = {
  link: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
  }),
  mode: PropTypes.string,
};
