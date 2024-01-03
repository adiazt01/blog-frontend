import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

export const CloseButtonNavModal = ({ setIsOpen }) => {
  return (
    <div className="absolute top-0 right-0 p-4">
      <button onClick={() => setIsOpen(false)} className="">
        <IoMdClose className="text-3xl" />
      </button>
    </div>
  );
};

CloseButtonNavModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
