import {Link} from "react-router-dom"; 
import React from 'react';
import '../List/List.scss';


function CoffeeCard(){
   
        return(
            <div className="coffee-gall-item">
               <Link className="coffee-thumbnail" to={`/detail-seula`}>
                <div className="coffee-img"><img src="/images/cb-01.jpg" alt="c"/></div>
                <p className="coffee-name">a</p>
                </Link>
            </div>
        );
}

export default CoffeeCard;