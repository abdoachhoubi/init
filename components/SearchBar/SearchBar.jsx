import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import { placeholder } from "../../logic";

const SearchBar = ({
  getRes,
  search,
  size,
  setKeyword,
  error,
  setError,
  val,
}) => {
  /* ------------------- Getting input placeholder -------------------- */

  let p = placeholder();

  /* -------------------------------------------------------------------- */

  /* ----------------------- Input value state ------------------------ */

  const [value, setValue] = useState("");
  useEffect(() => {
    if (val) setValue(val);
  }, []);

  /* -------------------------------------------------------------------- */

  return (
    <div className="search__container">
      <input
        className={`search__bar ${error}`}
        type="text"
        placeholder={p}
        onFocus={() => setError("")}
        onKeyDown={(e) => {
          e.key == "Enter" && getRes(search());
        }}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
          setKeyword(e.target.value.toUpperCase());
        }}
      />
      <div className={`search__icon ${error}`} onClick={() => getRes(search())}>
        <Search size={size} color="#FFF" />
      </div>
    </div>
  );
};

export default SearchBar;
