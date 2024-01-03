import { IoMdMenu } from "react-icons/io";
import { useCloseMenuOnLargeScreens } from "../../hooks/useCloseMenuOnLargeScreens";
import PropTypes from "prop-types";
import { NavModal } from "./NavModal";
import { LinkNav } from "./LinkNav";

export const LinksNav = ({ links }) => {
  const { isOpen, setIsOpen } = useCloseMenuOnLargeScreens();
  return (
    <>
      <nav>
        <button
          className="block text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdMenu />
        </button>
        <ul className="hidden space-x-2 md:flex">
          {links.map((link) => (
            <LinkNav key={link.name} link={link} />
          ))}
        </ul>
      </nav>
      {isOpen && <NavModal links={links} setIsOpen={setIsOpen} />}
    </>
  );
};

LinksNav.propTypes = {
  links: PropTypes.array.isRequired,
};
