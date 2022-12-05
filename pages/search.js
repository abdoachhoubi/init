import React from "react";
import { useRouter } from "next/router";

const Search = () => {
  const { query } = useRouter();
  console.log(query);
  return <div></div>;
};

export default Search;
