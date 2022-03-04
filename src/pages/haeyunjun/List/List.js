import React from 'react'
import './List.scss'
import TopNav from '../TopNav.js'

function CoffeeCard() {
    return (
        <>                        
            <li>
                <div className="image-box">
                <img alt='coffee1' src='images/haeyunjun/coffee1.webp'/>
                </div>
                <h3>Irish Cream Cold Brew ♡</h3>
            </li>
        </>
        
    )
}


function List() {
    return (
        <div>
            <TopNav/>

            <section className='title-bar'>
                <h1 className="coffee-title">콜드 브루 커피 ☕ </h1>
                <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
            </section>

            <section className="coldbrew-items">
                <ul className='coldbrew-items-list'>
                    <li>
                        <div className="image-box">
                        <img alt='coffee1' src='images/haeyunjun/coffee1.webp'/>
                        </div>
                        <h3>Irish Cream Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee2' src='images/haeyunjun/coffee2.webp'/>
                        </div>
                        <h3>Salted Caramel Cream Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee3' src='images/haeyunjun/coffee3.webp'/>
                        </div>
                        <h3>Reserve Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee4' src='images/haeyunjun/coffee4.webp'/>
                        </div>
                        <h3>Starbucks® Cold Brew Coffee ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee5' src='images/haeyunjun/coffee5.webp'/>
                        </div>
                        <h3>Vanilla Sweet Cream Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee6' src='images/haeyunjun/coffee6.webp'/>
                        </div>
                        <h3>Starbucks® Cold Brew Coffee with Milk ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee7' src='images/haeyunjun/coffee7.webp'/>
                        </div>
                        <h3>Starbucks Reserve® Nitro Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee8' src='images/haeyunjun/coffee8.jpeg'/>
                        </div>
                        <h3>Nitro Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee9' src='images/haeyunjun/coffee9.webp'/>
                        </div>
                        <h3>Vanilla Sweet Cream Nitro Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        <img alt='coffee10' src='images/haeyunjun/coffee10.webp'/>
                        </div>
                        <h3>Mocha Sweet Nitro Cold Brew ♡</h3>
                    </li>
                    <li>
                        <div className="image-box empty">
                        {/* <img> */}
                        </div>
                        <h3></h3>
                    </li>
                    <li>
                        <div className="image-box empty">
                        {/* <img> */}
                        </div>
                        <h3></h3>
                    </li>
                </ul>
            </section>

            <section className='title-bar'>
                <h1 className="coffee-title">브루드 커피 ☕ </h1>
                <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
            </section>

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
                        <div className="image-box hidden">
                        {/* <img alt='coffee11' src='images/haeyunjun/coffee11.jpeg'/> */}
                        </div>
                        <h3></h3>
                    </li>
                    <li>
                        <div className="image-box hidden">
                        {/* <img alt='coffee8' src='images/haeyunjun/coffee8.jpeg'/> */}
                        </div>
                        <h3></h3>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default List

