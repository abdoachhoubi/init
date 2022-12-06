import React from "react";
import Link from "next/link";
import { GitHub, Linkedin, Instagram, X } from "react-feather";
import { motion } from "framer-motion";

const Drawer = ({ menu, setMenu }) => {
  /* ---------- Drawer animations variants ----------- */

  const variants = {
    in: { x: 0, opacity: 1 },
    out: { x: "100%", opacity: 0 },
  };

  /* ------------------------------------------------- */

  return (
    <motion.div
      className="nav__drawer"
      variants={variants}
      initial={variants.out}
      animate={menu == "in" ? "in" : "out"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="menu__close" onClick={() => setMenu("out")}>
        <X size={26} color={"#FFFFFF"} />
      </div>
      <ul className="nav__list">
        <li className="nav__list__item" onClick={() => setMenu("out")}>
          <Link style={{ color: "#FFFFFF" }} href="/">
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
          <GitHub size={26} color={"#FFFFFF"} />
        </Link>
        <Link
          href="https://linkedin.com/in/abdoachhoubi"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={26} color={"#FFFFFF"} />
        </Link>
        <Link
          href="http://instagram.com/astroboy.dev"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={26} color={"#FFFFFF"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Drawer;
