import React from "react";
import Publication from "../../components/home/publication/Publication";
import SearchByTag from "../../components/search/searchByTag/SearchByTag";
import SearchHeader from "../../components/search/searchHeader/SearchHeader";

const SearchScreen = () => {
  return (
    <>
      <SearchHeader />
      <main>
        <SearchByTag />
        <Publication />
      </main>
    </>
  );
};

export default SearchScreen;
