import React from "react";
import "./TopsNav.scss"

export default function TopsNav (){

    return( 
    <div className="navigator">
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