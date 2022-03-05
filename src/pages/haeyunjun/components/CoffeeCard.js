import React from "react";
import '../List/List.scss';

export default function CoffeeCard(data) {
    const {coffeeData:{image}} = data;
    const {coffeeData:{name}} = data;
    return (                    
        <li>
            <div className="image-box">
                <img alt='coffee' src={image}/>
            </div>
            <h3>{name}</h3>
        </li>
    )
}

//정환
// return( 
//     <div className="productBoxJung">
//         <div className="imgBox">
//           <img alt="coffee" src={image} />
//         </div>
//         <div className="box">
//           {/* <button className="heartIcon" onClick={toggleHeart}>
//           <FontAwesomeIcon  icon={faHeart} style={{color:heart}} />
//           </button> */}
//           {name}
//         </div>
//       </div>
//   )
