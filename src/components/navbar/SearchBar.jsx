import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearch } from "../../hooks/useSearch";
import { useClickOutside } from "../../hooks/useClickOutside";
import { SearchResults } from "./SearchResults";
import { IoMdSearch } from "react-icons/io";

export const SearchBar = () => {
  const { register, watch /* handleSubmit */ } = useForm();
  const [isInputFocused, setInputFocused] = useState(false);
  const searchTerm = watch("searchTerm");
  const resultsRef = useRef();
  const { isLoading, results } = useSearch(searchTerm);
  useClickOutside(resultsRef, () => setInputFocused(false));

  return (
    <div className="relative w-4/6 md:w-4/12">
      <form className="relative">
        <input
          type="text"
          autoComplete="off"
          placeholder="Search"
          className="bg-gray-100 border-0 rounded-3xl py-2 px-4 focus:outline-none focus:ring-2 transition focus:ring-sky-500 w-full"
          {...register("searchTerm")}
          onFocus={() => setInputFocused(true)}
        />

        <IoMdSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl text-sky-500" />
      </form>
      {isInputFocused && (
        <div
          ref={resultsRef}
          className="absolute w-[90%] bg-white py-2 shadow-md top-12 left-0 z-10 "
        >
          <SearchResults
            isLoading={isLoading}
            results={results}
            setInputFocused={setInputFocused}
          />
        </div>
      )}
    </div>
  );
};
