import React from "react";
import Link from "next/link";
import { GitHub, Linkedin, Instagram } from "react-feather";

const DesNav = ({ width }) => {
  /* --------------- Social icon size ---------------- */

  let size = 22;
  if (width > 900 && width <= 1200) size = 20;
  if (width > 1200 && width <= 1600) size = 24;
  else if (width > 1600) size = 30;

  /* ------------------------------------------------- */

  return (
    <nav className="nav__dsk">
      <Link href="/">
        <h1 className="nav__title">
          <span>_ </span>init
        </h1>
      </Link>
      <ul className="nav__list">
        <li className="nav__list__item">
          <Link href="/" style={{ color: `#fff` }}>
            Home
          </Link>
        </li>
        <li className="nav__list__item">
          <Link href="/acronyms" style={{ color: `#fff` }}>
            Acronyms List
          </Link>
        </li>
        <li className="nav__list__item">
          <Link
            href="https://github.com/abdoachhoubi/init"
            target="_blank"
            rel="noreferrer"
            style={{ color: `#fff` }}
          >
            Contribute
          </Link>
        </li>
      </ul>
      <div className="nav__social">
        <Link
          href="https://github.com/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub size={size} color="#fff" />
        </Link>
        <Link
          href="https://linkedin.com/in/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={size} color="#fff" />
        </Link>
        <Link
          href="http://instagram.com/astroboy.dev"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={size} color="#fff" />
        </Link>
      </div>
    </nav>
  );
};

export default DesNav;
