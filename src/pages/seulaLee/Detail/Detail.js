import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Detail.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {useState,useEffect} from 'react'

export function IconHeart() {
    return <FontAwesomeIcon icon = {faHeart}/>;
}

function CoffeeReview(){
    
    return (
        <div className="coffee-review">
                    <h3 className="review-title">리뷰</h3>
                    <div className="review-cnt">
                        <dl className="review-user">
                            <dt>coffe_lover</dt>
                            <dd>너무 맛있어요!</dd>
                        </dl>
                        <dl className="review-user">
                            <dt>CHOCO7</dt>
                            <dd>오늘도 나이트로 뭐시기를 마시러 갑니다.</dd>
                        </dl>
                        <dl className="review-user">
                            <dt>legend_dev</dt>
                            <dd>진짜 나이트로 바닐라 크림은 전설이다.진짜 나이트로 바닐라 크림은 전설이다.</dd>
                        </dl>
                    </div>
                    <input type="text" className="input-review" placeholder="리뷰를 입력해주세요." />
                </div>
    );
}


function CoffeeInfo(){

    const [coffeeDetail,setCoffeeDetail] = useState({});
    
    useEffect(()=>{
        fetch('data/CbNitroVaCream.json',{method:'GET'})
        .then(res = res.json())
        .then(res = setCoffeeDetail(res));

    },[]);
return (<section className="coffee-info-container">
            <h2 className="hidden">커피 이미지 및 정보</h2>
            <div className="coffee-img-wrap">
                <img src="images/cb-01.jpg" alt="cb-01" />
            </div>
            <div className="coffee-info">
                <h3 className="coffee-info-title">
                    <ul className="coffee-info-txt">
                        <li>
                            <p>나이트로 바닐라 크림</p>
                        </li>
                        <li> <small>Nitro Vanilla Cream</small></li>
                    </ul>
                    <span className="coffee-info-like"><IconHeart/></span>
                </h3>
                <div className="coffee-info-desc">부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!</div>
                
                <div className="coffee-info-nutri">
                    <div className="coffee-nutri-head">
                        <p>제품 영양 정보</p>
                        <span>Tall(톨) / 355ml (12 fl oz)</span>
                    </div>
                    <div className="coffee-nutri-cnt">
                        <div className="nutri1">
                            <dl>
                                <dt>1회 제공량 (kcal)</dt>
                                <dd>80</dd>
                            </dl>
                            <dl>
                                <dt>포화지방 (g)</dt>
                                <dd>2</dd>
                            </dl>
                            <dl>
                                <dt>단백질 (g)</dt>
                                <dd>1</dd>
                            </dl>
                        </div>
                        <div className="nutri2">
                            <dl>
                                <dt>나트륨 (mg)</dt>
                                <dd>40</dd>
                            </dl>
                            <dl>
                                <dt>당류 (g)</dt>
                                <dd>10</dd>
                            </dl>
                            <dl>
                                <dt>카페인 (mg)</dt>
                                <dd>232</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="cooffee-nutri-allergy">
                        알레르기 유발요인 : 우유
                    </div>
                </div>
                <CoffeeReview/>
                
            </div>
        </section>);

}
function CoffeeDtail(){
    return(
        <article className="coffee-detail">
        <h2 className="hidden">커피 상세정보</h2>
        <h3 className="coffee-section-default">콜드 브루</h3>
        <span className="page-route">홈 &gt; MENU &gt; 음료 &gt; 에스프레소 &gt; 나이트로 바닐라 크림</span>
        <CoffeeInfo/>
    </article>
    );

}

const Detail = () => {
    return(
    <div className="wrap-default">
        <div className="container">
            <Menu/>
           <CoffeeDtail/>
        </div>
        <Footer/>
    </div>
    );
}

export {CoffeeReview,CoffeeInfo,CoffeeDtail};
export default Detail;