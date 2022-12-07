import React, { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../pages/search";
import { Nav, SearchBar } from "../../components";
import acronym from "../../logic";

const SearchHeader = ({ q, res, setRes }) => {
  /* ----------------------- SearchHeader States ------------------------ */

  const [keyword, setKeyword] = useState(null);
  const [errmsg, setErrmsg] = useState("opac");
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  /* -------------------------------------------------------------------- */

  /* ---------------------------- Icon Width ---------------------------- */

  const { width } = useContext(SearchContext);
  let size = 24;
  if (width < 1600) size = 20;
  else if (width < 1300) size = 18;
  else if (width < 1100) size = 16;

  /* -------------------------------------------------------------------- */

  /* ----------------------- Handling input error ----------------------- */

  useEffect(() => {
    if (error === "error__input")
      setNote("It seems that you haven't entered anything -_-");
    else if (error === "error__input v")
      setNote("Couldn't find acronym, try something else ^_^");
    if (error != "") setErrmsg("nonopac");
    else setErrmsg("opac");
  }, [error]);

  /* -------------------------------------------------------------------- */

  /* ----------------- Search for a specific acronym ------------------ */

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

  /* -------------------------------------------------------------------- */

  /* -------------------- Resolves the search result -------------------- */

  const getRes = ({ result, keyword }) => {
    switch (result) {
      case "Not Found":
        setError("error__input v");
        break;
      case "Invalid":
        setError("error__input");
        break;
      default:
        setRes(result, keyword);
        console.log(result, keyword);
        break;
    }
  };

  /* -------------------------------------------------------------------- */

  return (
    <header className="search__header">
      <Nav width={width} />
      <SearchBar
        getRes={getRes}
        setRes={setRes}
        search={search}
        size={size}
        setKeyword={setKeyword}
        error={error}
        setError={setError}
        val={q}
      />
      <p className={`error__message ${errmsg}`}>{note}</p>
    </header>
  );
};

export default SearchHeader;
