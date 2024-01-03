import PropTypes from "prop-types";
import { PaginationButton } from "../buttons/PaginationButton";

export const ListButtonsPagination = ({
  changePage,
  totalPages,
  currentPage,
}) => {
  return (
      <div className="flex flex-row px-8 mt-6 gap-2 text-xl font-medium">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <PaginationButton
              key={pageNumber}
              pageNumber={pageNumber}
              currentPage={currentPage}
              changePage={changePage}
            />
          )
        )}
      </div>
  );
};

ListButtonsPagination.propTypes = {
  changePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
