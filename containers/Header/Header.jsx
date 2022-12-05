import React, { useState, useContext } from "react";
import { Nav } from "../../components";
import { HomeContext } from "../../pages";
import { Search } from "react-feather";
import acronym from "../../logic";

const Header = () => {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);
  const { width } = useContext(HomeContext);

  const search = () => {
    if (!keyword) return "Invalid";
    else {
      setResult(acronym(keyword));
    }
    if (result) {
      const { complicated, extended, offensive } = result;
      if (complicated.length || extended.length || offensive.length)
        return result;
    }
    return "Not Found";
  };

  return (
    <header>
      <Nav width={width} />
      <h1 className="header__heading">
        Welcome to <span>init</span>, where you can the meaning of any{" "}
        <span>acronym</span>
      </h1>
      <div className="search__container">
        <input
          className="search__bar"
          type="text"
          placeholder="Try WTF"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="search__icon" onClick={() => console.log(search())}>
          <Search size={22} color="#FFF" />
        </div>
      </div>
    </header>
  );
};

export default Header;
