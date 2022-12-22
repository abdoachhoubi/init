import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import { Header, Footer } from "../containers";

export const HomeContext = createContext();

export default function Home() {
  /* ----------------------- Getting window width ----------------------- */

  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  /* -------------------------------------------------------------------- */

  return (
    <HomeContext.Provider value={{ width: width }}>
      <div>
        <Head>
          <title>init - acronym finder</title>
          <meta
            name="description"
            content="Acronym finder, it finds meanings of all acronyms including WTF? -> Where's The Food?"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      <Footer />
    </HomeContext.Provider>
  );
}
