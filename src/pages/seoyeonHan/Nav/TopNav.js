import React from "react";
import './TopNav.scss';

function TopNav(){
    return(
      <>
        <span className="webucksLogo">WeBucks</span>
        <nav>
          <span>COFFEE</span>
          <span>MENU</span>
          <span>STORE</span>
          <span>WHAT'S NEW</span>
        </nav>
      </>
    );
};

export default TopNav;