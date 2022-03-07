import React, {useState, useEffect} from 'react'
import NavBar from '../components/TopNav.js'
import CoffeeCard from './CoffeeCard.js';
import './List.scss'

function List() {
    const [coffeeList,setCoffeeList] = useState([]);
    
    useEffect(() => {
        fetch('/data/haeyun/CoffeeData.json')
            .then(res => res.json())
            .then(res => setCoffeeList(res)
            );
    }, []);
    
    // const coldBrew = data.filter(coffee => coffee.type === 'coldBrew');
    // const brewed = data.filter(coffee => coffee.type !== 'coldBrew');

    return (
        <div>
            <NavBar />

            {/* <!-- section1 bar --> */}
            <section className='haeyun-title-bar'>
                <h1 className="coffee-title">콜드 브루 커피 ☕ </h1>
                <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
            </section>

            {/* <!-- section1 items --> */}
            <section className="coldbrew-items">
                <ul className='coldbrew-items-list'>
                    {coffeeList.map(coffee => ( 
                    <CoffeeCard  coffee={coffee} key={coffee.id} />
                    ))}
                </ul>
            </section>
            
            {/* <!-- section2 bar --> */}
            <section className='haeyun-title-bar'>
                <h1 className="coffee-title">브루드 커피 ☕ </h1>
                <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
            </section>

{/* 
            <section>
                <ul className="brewed-coffee-items">
                    <li>
                        <div className="image-box">
                        <img alt='coffee9' src='images/haeyunjun/coffee11.webp'/>
                        </div>
                        <h3>Today's Coffee ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                            <img alt='coffee10' src='images/haeyunjun/coffee12.jpeg'/>
                        </div>
                        <h3>Ice Americano ♡</h3>
                    </li>  
                    <li>
                        <div className="image-box">
                        </div>
                        <h3></h3>
                    </li>
                    <li>
                        <div className="image-box">
                        </div>
                        <h3></h3>
                    </li>
                </ul>
            </section> */}
        </div>
    )
}

export default List

