import './List.scss';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import CoffeeCard from '../components/CoffeeCard';
import React,{useEffect,useState} from 'react';

function List(){
    const [coldBrewcoffeeList, setColdBrewCoffeeList] = useState([]);
    const [brewcoffeeList,setBrewCoffeeList]=useState([]);
    
    useEffect(()=>{
        fetch(
            'data/coldBrewcoffeeList.json',{method:'GET'})
            .then(res => res.json())
            .then( data =>{
                setColdBrewCoffeeList(data);
            });     
    }, []);
    useEffect(()=>{
        fetch(
            'data/brewCoffeeList.json',{method:'GET'})
            .then(res => res.json())
            .then( data =>{
                setBrewCoffeeList(data);
            });     
    },[]);
    return (
        <div className="wrap-seula">
        <div className="container-seula">
        <TopNav />
            <section className="coffee-section cold-brew">
                <h3 className="coffee-section-title">콜드 브루 커피 ☕</h3>
                <ul className="coffee-gall">
                        {coldBrewcoffeeList.map(list => { 
                             console.log(list);
                            <CoffeeCard key={list.id} coffeeName={list}/>
                        })
                        }
                
                </ul>
                
            </section>
            <section className="coffee-section brewed">
                <h3 className="coffee-section-title">브루드 커피 ☕</h3>
                    <ul className="coffee-gall">
                    {brewcoffeeList.map(list => { 
                             console.log(list);
                            <CoffeeCard key={list.id} coffeeName={list}/>
                        })
                        }
                    </ul>
            </section>
        </div>
        <Footer/>
    </div>
    );
}

export default List;