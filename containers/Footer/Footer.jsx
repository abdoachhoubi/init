import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <h4>&copy; 2022 _init</h4>
      <p>
        Built using{" "}
        <Link target="_blank" rel="noreferrer" href="https://nextjs.org">
          NextJS
        </Link>{" "}
        by{" "}
        <Link target="_blank" href="https://astrofolio.vercel.app">
          Astroboy
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
