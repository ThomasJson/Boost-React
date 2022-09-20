import React from "react";
import SearchByTag from "../../components/searchByTag/SearchByTag";
import SearchHeader from "../../components/searchHeader/SearchHeader";

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
