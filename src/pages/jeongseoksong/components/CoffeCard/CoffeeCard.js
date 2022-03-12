 import React from 'react'
import './CoffeeCard.scss'
import {Link} from "react-router-dom"; 


function CoffeeCard({list}) {

    return (
        <div >
            <Link className="coffee-thumbnail" to={`/coffee/`+list.id}>
                <div className="coffee-img">
                    <img src={list.imgUrl} alt={list.imgAlt}/></div>
                <p className="coffee-name">{list.name}</p>
            </Link>
        </div>
    )
}

                    export default CoffeeCard

