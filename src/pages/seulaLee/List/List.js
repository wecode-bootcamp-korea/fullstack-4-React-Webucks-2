import './List.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import {Link} from "react-router-dom"; 
import React, { useState, useEffect } from 'react';
//mport CoffeeCard from '../components/CoffeeCard';




function List(){
    const [coffeeList,setCoffeeList] = useState([]);

    useEffect(()=>{
        fetch(
            'data/cBrewcoffeeList.json',{method:'GET'})
            .then(res => res.json())
            .then( data =>{
                setCoffeeList(data);
            });     
    },[]);
    return (
        <div className="wrap-default">
        <div className="container">
        <Menu />
            <section className="coffee-section cold-brew">
                <h3 className="coffee-section-title">콜드 브루 커피 ☕</h3>
                <ul className="coffee-gall">
                    {coffeeList.map((coffeeName) => {
                        return (
                            <li>
                                <Link className="coffee-thumbnail" to={`/detail-seula`}>
                                <div className="coffee-img"><img src={coffeeName.imgUrl} alt={coffeeName.imgAlt}/></div>
                                <p className="coffee-name">{coffeeName.name}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section className="coffee-section brewed">
                <h3 className="coffee-section-title">브루드 커피 ☕</h3>
                
            </section>
        </div>
        <Footer/>
    </div>
    );
}

export default List;