import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Nav } from "../components";
import src from "../res";
import { Footer } from "../containers";

const TableRow = ({ k, value }) => {
  return (
    <tr>
      <td>{k}</td>
      <td>{value}</td>
    </tr>
  );
};

const Acronyms = () => {
  const [size, setSize] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    setWidth(window.innerWidth);
  }, [size]);

  return (
    <div>
      <Head>
        <title>init - acronyms list</title>

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

        <meta
          name="description"
          content="Acronym finder, it finds meanings of all acronyms including WTF? -> Where's The Food?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="ac__header">
        <Nav width={width} />
      </header>
      <main className="ac__main">
        {src?.complicated.length != 0 && (
          <section className="res__section">
            <h1 className="sec__heading">Complicated</h1>
            <table className="res__list">
              <thead>
                <tr>
                  <th>
                    <p>Acronym</p>
                  </th>
                  <th>
                    <p>Meaning</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {src?.complicated.map(({ key, value }, i) => (
                  <TableRow key={i} k={key} value={value} />
                ))}
              </tbody>
            </table>
          </section>
        )}
        {src?.extended.length != 0 && (
          <section className="res__section">
            <h1 className="sec__heading">Extended</h1>
            <table className="res__list">
              <thead>
                <tr>
                  <th>
                    <p>Acronym</p>
                  </th>
                  <th>
                    <p>Meaning</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {src?.extended.map(({ key, value }, i) => (
                  <TableRow key={i} k={key} value={value} />
                ))}
              </tbody>
            </table>
          </section>
        )}
        {src?.offensive.length != 0 && (
          <section className="res__section">
            <h1 className="sec__heading">Offensive</h1>
            <table className="res__list">
              <thead>
                <tr>
                  <th>
                    <p>Acronym</p>
                  </th>
                  <th>
                    <p>Meaning</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {src?.offensive.map(({ key, value }, i) => (
                  <TableRow key={i} k={key} value={value} />
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Acronyms;
