import React from "react";
import SearchByTag from "../../components/search/searchByTag/SearchByTag";
import SearchHeader from "../../components/search/searchHeader/SearchHeader";

const SearchScreen = () => {
  return (
    <>
      <SearchHeader />
      <main>
        <SearchByTag />
      </main>
    </>
  );
};

export default SearchScreen;
