import React from "react";
import "./Nav.scss";

function TopNav() {
  return (
    <div>
      <header className="nav-kyungwon">
        <h1 className="logo">Webucks</h1>
        <nav>
          <ul className="nav-links">
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
