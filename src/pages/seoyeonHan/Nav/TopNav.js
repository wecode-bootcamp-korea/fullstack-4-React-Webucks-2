import React from "react";
import "./TopNav.scss";

function TopNav() {
  return (
    <div className="topNavHeader">
      <span className="webucksLogo">WeBucks</span>
      <nav className="webucksNav">
        <span className="webuckSpan">COFFEE</span>
        <span className="webuckSpan">MENU</span>
        <span className="webuckSpan">STORE</span>
        <span className="webuckSpan">WHAT'S NEW</span>
      </nav>
    </div>
  );
}

export default TopNav;
