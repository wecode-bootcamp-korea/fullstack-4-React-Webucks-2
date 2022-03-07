import React from 'react'
import TopNav from '../components/TopNav/TopNav.js'
import './Detail.scss'



function Detail() {


    return (
<div>
    
    <TopNav />
        
        <section>   
            <h1>콜드 브루</h1>
            <h3>홈 > Menu > 음료 > 에스프레소 > 화이트 초콜릿 모카</h3>
            <div>
                <div className='mainBox'>
                    <img className='mainImg' src={"https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}></img>
                    <div className='discription'>
                        <div className='nameBox'>
                            <div className='coffeeName'>
                                <h1>화이트 초콜릿 모카</h1>
                                <h3>White Chocolate Mocha</h3>
                            </div>
                            <div>Like</div>
                        </div>
                        <div className='discriptionBox'>
                            <div className='coffeediscription'>달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피</div>        
                            <div className='nutritioninfo'>
                                <h2>제품 영양 정보</h2>
                                <h2>Tall(톨) / 355ml(12 fl oz)</h2>
                            </div>
                            <div className='nutritiondetail'>
                                <div className='nutritiondetail1'>
                                    <div className='kcal'>
                                        <div>1회 지공량(kcal)</div>
                                        <div>345</div>
                                    </div>
                                    <div className='fat'>
                                        <div>포화지방(g)</div>
                                        <div>11</div>
                                    </div>
                                    <div className='protein'>
                                        <div>단백질(g)</div>
                                        <div>11</div>
                                    </div>
                                </div>
                                <div className='nutritiondetail2'>
                                    <div className='natrium'>
                                        <div>나트륨(mg)</div>
                                        <div>150</div>
                                    </div>
                                    <div className='sugars'>
                                        <div>당류(g)</div>
                                        <div>35</div>
                                    </div>
                                    <div className='caffeine'>
                                        <div>카페인(mg)</div>
                                        <div>75</div>
                                    </div>
                                </div>
                            </div>
                            <div className='allergies'>알레르기 유발 요인 : 우유</div>
                            <h2 className='review'>리뷰</h2>
                            <ol className='reviewcomment'>
                                <li><span className='nickName'>coffee_lover</span>
                                    <span> 너무 맛있어요!</span></li>
                                <li><span className='nickName'>CHOCO7</span>
                                    <span> 오늘도 화이트 초콜릿 모카를 마시러 갑니다.</span></li>
                                <li><span className='nickName'>legend_dev</span>
                                    <span> 진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜... </span></li>
                            </ol>
                            <div className='reviewForm'>리뷰를 입력 해주세요</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <ol>
                <ii>COMPANY
                    <li>한눈에 보기</li>
                    <li>스타벅스 사명</li>
                    <li>스타벅스 소개</li>
                    <li>국내 뉴스룸</li>
                    <li>세계의 스타벅스</li>
                    <li>글로벌 뉴스룸</li>
                </ii>
                <ii>CORPORATE SALES
                    <li>단체 및 기업 구매 안내</li>
                </ii>
                <ii>PARTNERSHIP
                    <li>신규 입점 제의</li>
                    <li>협력 고객사 등록 신청</li>
                </ii>
                <ii>ONLINE COMMUNITY
                    <li>페이스북</li>
                    <li>트위터</li>
                    <li>유튜브</li>
                    <li>블로그</li>
                    <li>인스타그램</li>
                </ii>
                <ii>RECRUIT
                    <li>채용 소개</li>
                    <li>채용 지원하기</li>
                </ii>
                <ii>WEBUCKS</ii>
            </ol>
        </footer>
</div>
        )
}



export default Detail



