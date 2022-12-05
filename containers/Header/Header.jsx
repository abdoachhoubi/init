import React, { useContext } from "react";
import { Nav } from "../../components";
import { HomeContext } from "../../contexts";

const Header = () => {
  const { width } = useContext(HomeContext);

  return (
    <header>
      <Nav width={width} />
      <h1>Header</h1>
    </header>
  );
};

export default Header;
