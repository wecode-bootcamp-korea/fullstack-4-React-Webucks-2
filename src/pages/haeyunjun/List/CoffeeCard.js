import React from "react";
import "./CoffeeCard.scss";

function CoffeeCard ({coffee}) {  
    return( 
        <li>
            <div className="image-box">
                <img alt='coffee' src={coffee.imgUrl}/>
            </div>
            <div>
                {coffee.name}
            </div>
        </li>
    )
}

export default CoffeeCard