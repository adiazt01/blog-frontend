import { NavbarCMS } from "../components/navbar/NavbarCMS";
import PropTypes from "prop-types";

export const LayoutCMS = ({ children }) => {
  return (
    <>
      <NavbarCMS />
      <div className="container my-8 m-auto">{children}</div>
    </>
  );
};

LayoutCMS.propTypes = {
  children: PropTypes.node.isRequired,
};
