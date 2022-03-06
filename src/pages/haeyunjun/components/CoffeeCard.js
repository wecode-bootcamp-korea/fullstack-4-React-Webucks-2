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
//슬랙에 물어볼것...정환님 커피카드 코드에 image, name 어디서 가져오는건지?
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
