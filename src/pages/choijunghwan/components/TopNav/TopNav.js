import React from "react";
import "./TopNav.scss"

export default function TopNav (){

    return( 
    <div className="navigatorJung">
      <nav >
        <span>Webucks</span>
        <ol className="navLists">
          <li>COFFEE</li>
          <li>MENU</li>
          <li>STORE</li>
          <li>WHAT'S NEW</li>
        </ol>
      </nav>
  </div>)
}