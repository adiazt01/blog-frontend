import PropTypes from "prop-types";
import { LinkNav } from "./LinkNav";
import { CloseButtonNavModal } from "../buttons/CloseButtonNavModal";

export const NavModal = ({ setIsOpen, links }) => {
  return (
    <>
      <div
        className="fixed inset-1 z-50 bg-white opacity-100"
        onClick={() => setIsOpen(false)}
      >
        <CloseButtonNavModal setIsOpen={setIsOpen} />
        <div className="flex flex-col items-center justify-center h-screen">
          <ul className="space-y-4 text-center">
            {links.map((link) => (
              <LinkNav key={link.name} link={link} mode="mobile" />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

NavModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  links: PropTypes.array.isRequired,
};
