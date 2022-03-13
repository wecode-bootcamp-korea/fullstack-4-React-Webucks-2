import React, {useState} from 'react'
import './Detail.scss'
import NavBar from '../components/TopNav.js'


function Detail() {
    const [isLike, setIsLike] = useState(false);

    const clickEvent = () => {
        setIsLike(!isLike);
    }
    
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
                <div className='description'>
                    <div className='name-box'>
                        <div className='coffee-name'>
                            <h1>화이트 초콜릿 모카</h1>
                            <h2>white chocolate Mocha</h2>
                        </div>
                        <div className="heart gray">
                            <i  id="icon" 
                                className = {isLike ? "fa-solid fa-heart red" : "fa-regular fa-heart gray"} 
                                onClick = {clickEvent}>
                            </i>
                        </div>
                    </div>
                    <summary className='explain'>
                        <p>달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피</p>
                    </summary>
                    <div className='nutrition-bar'>
                        <h1> 제품 영양 정보 </h1>
                        <p> Tall(톨)/355ml (12 fl oz)</p>
                    </div>
                    <div className="nutrition-Detail">
                        <div className="firstSection">
                            <ul className="nutritionName">
                                <li>1회 제공량 (kcal)</li>
                                <li>포화지방 (g)</li>
                                <li>단백질 (g)</li>
                            </ul>
                            <ul className="amount">
                                <li>345</li>
                                <li>11</li>
                                <li>11</li>
                            </ul>
                        </div>
                        <div className="secondSection">
                            <ul className="nutritionName">
                                <li>나트륨 (mg)</li>
                                <li>당류 (g)</li>
                                <li>카페인 (mg)</li>
                            </ul>
                            <ul className="amount">
                                <li>150</li>
                                <li>35</li>
                                <li>75</li>
                            </ul>
                        </div>
                    </div>
                    <div className="allergy">알레르기 유발 요인 : 우유</div>
                    <div className="review">
                    <h2>리뷰</h2>
                        <ul>
                            <li>
                            <p className="userName">coffee_lover</p> 너무 맛있어요
                            </li>
                            <li>
                            <p className="userName">CHOCO7</p> 오늘도 화이트 초콜릿
                            모카를 마시러 갑니다.
                            </li>
                            <li>
                            <p className="userName">legend_dev</p> 진짜 화이트 초콜릿
                            모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜
                            화이트 초콜릿 모카는 전설이다.
                            </li>
                        </ul>
                        <input
                            id="commentInput"
                            type="text"
                            placeholder="리뷰를 입력해주세요."
                        />
                    </div>
                </div>
            </main>

            {/* footer */}
            <footer>
                <ul>
                    <li>COMPANY</li>
                    <li>한눈에 보기</li>
                    <li>스타벅스 사명</li>
                    <li>스타벅스 소개</li>
                    <li>국내 뉴스룸</li>
                    <li>세계의 스타벅스</li>
                    <li>글로벌 뉴스룸</li>
                </ul>
                <ul>
                    <li>CORPORATE SALES</li>
                    <li>단체 및 기업 구매 안내</li>
                </ul>
                <ul>
                    <li>PARTNERSHIP</li>
                    <li>신규 입점 제의</li>
                    <li>협력 고객사 등록 신청</li>
                </ul>
                <ul>
                    <li>ONLINE COMMUNITY</li>
                    <li>페이스북</li>
                    <li>트위터</li>
                    <li>유튜브</li>
                    <li>블로그</li>
                    <li>인스타그램</li>
                </ul>
                <ul>
                    <li>RECRUIT</li>
                    <li>제품 소개</li>
                    <li>채용 지원하기</li>
                </ul>
                <ul>
                    <li>WEBUCKS</li>
                </ul>
            </footer>
        </div>
    )
}

export default Detail