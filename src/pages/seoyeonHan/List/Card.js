import React from "react";

function Card({ coffee }) {
  return (
    // <div>
    //     <div>{coffee.name}</div>
    //     <img src={coffee.imgUrl} alt="coffee"/>
    // </div>
    <li className="menuData">
      <dl>
        <dt className="imgDt">
          <img src={coffee.imgUrl} alt={coffee.name} />
        </dt>
        <dd>{coffee.name}</dd>
      </dl>
    </li>
  );
}

export default Card;
