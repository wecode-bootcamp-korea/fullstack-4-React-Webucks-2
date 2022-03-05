import React from "react";

function Card({ coffee }) {
  return (
    <>
      <li className="menuData">
        <dl className="coffeeMenuData">
          <dt className="imgDt">
            <img src={coffee.imgUrl} alt={coffee.name} />
          </dt>
          <dd className="coffeeNamedd">{coffee.name}</dd>
        </dl>
      </li>
    </>
  );
}

export default Card;
