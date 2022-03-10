import React, {useState} from 'react'
import './Detail.scss'
import NavBar from '../components/TopNav.js'


function Detail() {
    // const [coffeeDetail, setCoffeeDetail] = useState({
    // "id": 0,
    // "name": "",
    // "EnglishName": "",
    // "desc": "",
    // "size": "",
    // "volume": "",
    // "nutrition": [],
    // "allergie": "",
    // "comments": [],
    // "imgURL": ""
    // });

    // useEffect(() => {

    // }, [])
    
    return (
        <div className='detail-haeyun'>
            {/* 네비게이션바 */}
            <NavBar/>

            {/* 서브타이틀 */}
            <section className= 'name-bar'>
                <h1>콜드 브루</h1>
                <p>홈 &gt; MENU &gt; 음료 &gt; 에스프레스 &gt; 화이트 초콜릿 모카</p>
            </section>
            
            {/* 메인 */}
            <main className='main'>
            
                {/* 이미지 */}
                <div className='img'>
                    <img src='./images/haeyunjun/coffee1.webp'/>
                </div>

                {/* 상세설명 */}
                <section className='description'>
                    <div className='coffee-name'>
                        <h1>화이트 초콜릿 모카</h1>
                        <h2>white chocolate Mocha</h2>
                        {/* <Heart /> */}
                    </div>
                </section>

            </main>

            {/* footer */}
            <footer>

            </footer>
        </div>
    )
}

export default Detail