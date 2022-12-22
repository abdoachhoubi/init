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
          <meta property="og:url" content="https://openinit.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="init - acronym finder" />
          <meta
            property="og:description"
            content="Acronym finder, it finds meanings of all acronyms!"
          />
          <meta
            property="og:image"
            content="https://openinit.vercel.app/init-acronym-finder.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="openinit.vercel.app" />
          <meta property="twitter:url" content="https://openinit.vercel.app" />
          <meta name="twitter:title" content="init - acronym finder" />
          <meta
            name="twitter:description"
            content="Acronym finder, it finds meanings of all acronyms!"
          />
          <meta
            name="twitter:image"
            content="https://openinit.vercel.app/init-acronym-finder.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
      <Footer />
    </HomeContext.Provider>
  );
}
