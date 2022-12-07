import React from "react";
import { Search } from "react-feather";
import { placeholder } from "../../logic";

const SearchBar = ({ getRes, search, size, setKeyword, error, setError }) => {
  let p = placeholder();

  return (
    <div className="search__container">
      <input
        className={`search__bar ${error}`}
        type="text"
        placeholder={p}
        onFocus={() => setError("")}
        onChange={(e) => setKeyword(e.target.value.toUpperCase())}
      />
      <div className={`search__icon ${error}`} onClick={() => getRes(search())}>
        <Search size={size} color="#FFF" />
      </div>
    </div>
  );
};

export default SearchBar;
