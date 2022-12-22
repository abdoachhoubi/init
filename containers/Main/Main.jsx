import React, { useState, useEffect } from "react";
import acronym from "../../logic";

const TableRow = ({ k, value }) => {
  return (
    <tr>
      <td>{k}</td>
      <td>{value}</td>
    </tr>
  );
};

const Main = ({ q, response }) => {
  const [res, setRes] = useState(null);
  useEffect(() => {
    setRes(acronym(q));
  }, [q]);
  console.log(res);
  useEffect(() => {
    if (response) {
      setRes(response);
    }
  }, [response]);

  return (
    <main className="search__main">
      {res?.offensive.length != 0 && (
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
              {res?.offensive.map(({ key, value }, i) => (
                <TableRow key={i} k={key} value={value} />
              ))}
            </tbody>
          </table>
        </section>
      )}
      {res?.extended.length != 0 && (
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
              {res?.extended.map(({ key, value }, i) => (
                <TableRow key={i} k={key} value={value} />
              ))}
            </tbody>
          </table>
        </section>
      )}
      {res?.complicated.length != 0 && (
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
              {res?.complicated.map(({ key, value }, i) => (
                <TableRow key={i} k={key} value={value} />
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
};

export default Main;
