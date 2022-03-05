<<<<<<< HEAD
import React ,{useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./CoffeCard.scss"

export default function CoffeCard (data){  
  const [heart, setHeart] = useState("black");

  const toggleHeart = (e)=>{
      heart == "black" ?  setHeart("red"):setHeart("black")
      }

        const {coffeeData:{name}} = data;
        const {coffeeData:{image}} = data;
    return( 
    <div className="productBoxJung">
        <div className="imgBox">
          <img alt="coffee" src={image} />
        </div>
        <div className="box">
          <button className="heartIcon" onClick={toggleHeart}>
          <FontAwesomeIcon  icon={faHeart} style={{color:heart}} />
          </button>
          {name}
        </div>
      </div>
  )
=======
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
>>>>>>> master
}