import { SearchResult } from "./SearchResult";
import PropTypes from "prop-types";

export const SearchResults = ({ isLoading, results, setInputFocused }) => {
  if (isLoading) {
    return (
      <div className="absolute w-full bg-white rounded-md shadow-lg">
        <div className="flex items-center justify-center p-4">
          <div className="w-6 h-6 border-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="absolute w-full bg-white rounded-md shadow-lg">
        <p className="px-4 py-2 hover:bg-gray-100 w-full font-medium">
          No results found
        </p>
      </div>
    );
  }

  return (
    <div className="absolute w-full bg-white rounded-md shadow-lg">
      {results.map((result) => (
        <SearchResult
          key={result.id}
          result={result}
          setInputFocused={setInputFocused}
        />
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
  setInputFocused: PropTypes.func.isRequired,
};
