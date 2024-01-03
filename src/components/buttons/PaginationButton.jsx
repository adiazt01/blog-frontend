import PropTypes from "prop-types";

export const PaginationButton = ({ pageNumber, currentPage, changePage }) => {
  return (
    <button
      key={pageNumber}
      onClick={() => changePage(pageNumber)}
      disabled={currentPage && currentPage === pageNumber}
      className={`px-4 py-2 rounded transition duration-300 ease-in-out ${
        pageNumber === currentPage
          ? "bg-blue-100 text-sky-500 cursor-default"
          : "bg-blue-200 text-sky-500 hover:bg-sky-300 hover:text-blue-500"
      }`}
    >
      {pageNumber}
    </button>
  );
};

PaginationButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};
