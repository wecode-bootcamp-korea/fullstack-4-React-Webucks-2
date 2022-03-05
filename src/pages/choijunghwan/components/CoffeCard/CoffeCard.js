
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import "./CoffeCard.scss"

export default function CoffeCard (data){  
        const {coffeeData:{name}} = data;
        const {coffeeData:{image}} = data;
    return( 
    <div className="productBox">
        <div className="imgBox">
          <img alt="coffee" src={image} />
        </div>
        <div className="box">
          <button className="heartIcon">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          {name}
        </div>
      </div>
  )

}