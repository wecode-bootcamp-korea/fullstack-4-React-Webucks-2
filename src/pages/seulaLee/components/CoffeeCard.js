import {Link} from "react-router-dom"; 
import React,{useEffect,useState} from 'react';
import '../List/List.scss';


function CoffeeCard(){
    const [coffeeList,setCoffeeList]=useState([]);
    useEffect(()=>{
        fetch(
            'data/cBrewcoffeeList.json',{method:'GET'})
            .then(res => res.json())
            .then( data =>{
                setCoffeeList(data);
            });     
    },[]);
        return(
            <ul className="coffee-gall">
                    {coffeeList.map((coffeeName) => {
                        return (
                            <li key={coffeeName.id}>
                                <Link className="coffee-thumbnail" to={`/coffee/`+coffeeName.id}>
                                <div className="coffee-img"><img src={coffeeName.imgUrl} alt={coffeeName.imgAlt}/></div>
                                <p className="coffee-name">{coffeeName.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
        );
}

export default CoffeeCard;