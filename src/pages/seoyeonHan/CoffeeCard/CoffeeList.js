import React from "react";
import "./CoffeeCard/Coffee.scss"


function CoffeeCard(coffee){
  return (
    <>
      <li className="menuData">
      <dl>
        <dt className="imgDt">
          <img src={coffee.imgUrl} alt="coffee이미지" />
        </dt>
        <dd>{coffee.name}</dd>
      </dl>
    </li>
    </>
    );
  };

export default CoffeeCard;