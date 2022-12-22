import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SearchHeader, Main, Footer } from "../containers";

export const SearchContext = createContext();

const Search = () => {
  const [res, setRes] = useState(null);

  /* --------------------- Getting request query ---------------------- */

  const { query } = useRouter();

  /* -------------------------------------------------------------------- */

  /* ----------------------- Getting window width ----------------------- */

  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  /* -------------------------------------------------------------------- */

  return (
    query?.q && (
      <SearchContext.Provider value={{ width: width }}>
        <div>
          <Head>
            <title>init - acronym meaning</title>
            <meta
              name="description"
              content="Acronym finder, it finds meanings of all acronyms including WTF? -> Where's The Food?"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <SearchHeader q={query.q} setRes={setRes} res={res} />
          <Main q={query.q} response={res} />
        </div>
        <Footer />
      </SearchContext.Provider>
    )
  );
};

export default Search;
``;
