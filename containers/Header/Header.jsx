import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Nav } from "../../components";
import { HomeContext } from "../../pages";
import { Search } from "react-feather";
import acronym from "../../logic";
import { Router } from "next/router";

const Header = ({ generate }) => {
  const [keyword, setKeyword] = useState(null);
  const { width } = useContext(HomeContext);
  const router = useRouter();

  let size = 24;
  if (width < 1600) size = 20;
  else if (width < 1300) size = 18;
  else if (width < 1100) size = 16;

  const search = () => {
    let result;
    if (!keyword) return "Invalid";
    else {
      result = acronym(keyword);
      console.log(acronym(keyword));
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
          onChange={(e) => setKeyword(e.target.value.toUpperCase())}
        />
        <div
          className="search__icon"
          onClick={() =>
            router.push({ pathname: "/search", query: { q: keyword } })
          }
        >
          <Search size={size} color="#FFF" />
        </div>
      </div>
    </header>
  );
};

export default Header;
