import React from "react";
import "./CoffeeCard/Coffee.scss"


function CoffeeCard(){
  return (
    <>
      <li className="menuData">
      <dl>
        <dt className="imgDt">
          <img
            src="images/coldbrew/coldbrew1.jpg"
            alt="콜드브루1"
          />
        </dt>
        <dd>나이트로 바닐라 크림</dd>
      </dl>
    </li>
    </>
    );
  };

export default CoffeeCard;