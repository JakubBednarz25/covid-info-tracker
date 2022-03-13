import React from "react";
import "./Header.scss";

import GitHub from "../../github.png";

const Header = () => {
  return (
    <header>
      <h1>Covid Info Tracker 🦠</h1>
      <a href="https://github.com/JakubBednarz25" target="_blank">
        <img src={GitHub} />
      </a>
    </header>
  );
};

export default Header;
