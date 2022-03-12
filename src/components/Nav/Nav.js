import React, { useState } from "react";
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faGrinHearts } from "@fortawesome/free-regular-svg-icons";

function TopNav() {
  const [isLike, setIsLike] = useState(false);

  const clickEvent = () => {
    setIsLike((current) => !current);
  };
  return (
    <div>
      <header className="nav-kyungwon">
        <h1 className="logo">Webucks</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <FontAwesomeIcon
                icon={!isLike ? faHeart : faGrinHearts}
                onClick={clickEvent}
              />
              <i className="fa-thin fa-heart"></i>
            </li>
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
