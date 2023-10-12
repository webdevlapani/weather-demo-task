import React from "react";

// Define the type for the props that the SearchBar component accepts
interface SearchBarPropsType {
  // A function that handles the search query input
  handleSearchQuery: (value: string) => void;
  isError?: boolean;
}

// SearchBar component that receives the handleSearchQuery function as a prop
const SearchBar: React.FC<SearchBarPropsType> = ({
  handleSearchQuery,
  isError,
}) => {
  return (
    <div className="w-full mt-3">
      <input
        id="searchBar"
        placeholder="search for your location"
        className="p-2 rounded-[25px] w-[50%] m-auto"
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
      <p className="mt-1 text-red-500">
        {isError && "Please Enter a valid place"}
      </p>
    </div>
  );
};

export default SearchBar;
