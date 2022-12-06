import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { SearchContext } from "../../pages/search";
import { Nav, SearchBar } from "../../components";

const SearchHeader = () => {
  const [keyword, setKeyword] = useState(null);
  const [error, setError] = useState("");
  const { width } = useContext(SearchContext);
  const router = useRouter();

  let size = 24;
  if (width < 1600) size = 20;
  else if (width < 1300) size = 18;
  else if (width < 1100) size = 16;

  const search = () => {
    let result;

    if (!keyword) return { result: "Invalid", keyword };
    else result = acronym(keyword);
    if (result) {
      const { complicated, extended, offensive } = result;
      if (complicated.length || extended.length || offensive.length) {
        return { result, keyword };
      }
    }
    return { result: "Not Found", keyword };
  };

  const getRes = ({ result, keyword }) => {
    switch (result) {
      case "Not Found":
        console.log("okeh");
        break;
      case "Invalid":
        console.log("okeh");
        break;
      default:
        router.push({ pathname: "/search", query: { q: keyword } });
        break;
    }
  };

  return (
    <header className="search__header">
      <Nav width={width} />
      <SearchBar
        getRes={getRes}
        search={search}
        size={size}
        setKeyword={setKeyword}
        error={error}
        setError={setError}
      />
      <h1>SearchHeader</h1>
    </header>
  );
};

export default SearchHeader;
