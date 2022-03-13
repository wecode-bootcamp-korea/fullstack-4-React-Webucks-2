import React from "react";
import "./Card.scss";

function Card({ coffee }) {
  return (
    <div>
      <li className="coffee">
        <div className="img-kyungwon">
          <img src={coffee.images} alt={coffee.name} />
        </div>
        <div className="name">{coffee.name}</div>
      </li>
    </div>
  );
}

export default Card;
