import './List.scss';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import CoffeeCard from '../components/CoffeeCard';
import React,{useEffect,useState} from 'react';

function List(){
    const [coffeeList,setCoffeeList]=useState([]);
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
        <TopNav />
            <section className="coffee-section cold-brew">
                <h3 className="coffee-section-title">콜드 브루 커피 ☕</h3>
                    <ul className="coffee-gall">
                        {coffeeList.map(list => { 
                            <CoffeeCard key={list.id} coffeeName={list}/>
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