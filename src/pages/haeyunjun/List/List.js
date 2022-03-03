import React from 'react'
import './List.scss'
import TopNav from '../TopNav.js'

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
                    {/* <img alt="coffee" width='250px' height="250px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"> */}
                    </div>
                    <h3>Irish Cream Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.summitmedia-digital.com/spotph/images/2021/02/16/sbuxph-saltedcaramelcoldbrew-ongrey-1613448236.png"> */}
                    </div>
                    <h3>Salted Caramel Cream Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Reserve Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Starbucks® Cold Brew Coffee ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Vanilla Sweet Cream Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Starbucks® Cold Brew Coffee with Milk ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Starbucks Reserve® Nitro Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Nitro Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
                    </div>
                    <h3>Vanilla Sweet Cream Nitro Cold Brew ♡</h3>
                </li>
                <li>
                    <div className="image-box">
                    {/* <img alt="coffee" width='250px' height="250px" src="https://images.velog.io/images/haleyjun/post/5d2ceec3-918b-46ae-afb0-5b033390e061/Daco_1071899.png"> */}
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
                        {/* <img alt="coffee" width='250px' height="250px" src="https://img.freepik.com/free-photo/iced-black-coffee-iced-americano-isolated-white-background_536380-64.jpg?size=626&ext=jpg"> */}
                        </div>
                        <h3>Today's Coffee ♡</h3>
                    </li>
                    <li>
                        <div className="image-box">
                        {/* <img alt="coffee" width='250px' height="250px" src="https://mrlukecy.com/wp-content/uploads/2020/05/ice-americano.png"> */}
                        </div>
                        <h3>Ice Americano ♡</h3>
                    </li>  
                    <li>
                        <div className="image-box hidden">
                        {/* <img alt="coffee" width='250px' height="250px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"> */}
                        </div>
                        <h3></h3>
                    </li>
                    <li>
                        <div className="image-box hidden">
                        {/* <img alt="coffee" width='250px' height="250px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"> */}
                        </div>
                        <h3></h3>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default List

