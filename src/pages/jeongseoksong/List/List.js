
import React, { useEffect, useState } from 'react';
import "./List.scss";
import TopNav from '../components/TopNav/TopNav.js';
import CoffeeCard from '../components/CoffeCard/CoffeeCard';




function List() {

    const [coldBrewCoffeeList, setcoldBrewCoffeeList] = useState([]);
    const [brewCoffeeList, setbrewCoffeeList] = useState([]);

    useEffect(()=>{
        fetch('/data/coldBrewcoffeeList.json')
            .then(res => res.json())
            .then(data => { 
                setcoldBrewCoffeeList(data);
            });
    }, []);

    useEffect(()=>{
        fetch('/data/brewCoffeeList.json')
            .then(res => res.json())
            .then(data => { 
                setbrewCoffeeList(data);
            });
    }, []);

    return (
        <div>
    <TopNav />
        <section className="coldbrew">
            <div className="textbar1">
                <ul>
                    <ol className="bigText">콜드 브루 커피</ol>
                    <ol className="smallText">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</ol>
                </ul>
                <div className='coldbrew-section'>
                    {coldBrewCoffeeList.map((list)=>{
                        <CoffeeCard key={list.id} list={list}/>
                    })}
                </div>
            </div>
        </section>
        <section className="brewCoffee">
            <div className="textbar2">
                <ul>
                    <ol className="bigText">브루드 커피</ol>
                    <ol className="smallText">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</ol>
                </ul>
                <div className='brew-section'>
                    {brewCoffeeList.map((list)=>{
                        <CoffeeCard key={list.id} list={list}/>
                    })}
                </div>
            </div>
        </section>

</div>
        )
}



export default List



