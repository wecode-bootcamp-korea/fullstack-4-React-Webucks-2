import React, { useState } from "react";
import "./Detail.scss";
// import { faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons"
import { faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopNav from '../Nav/TopNav';
import Footer from './Footer';

function Detail() {
  const [heart, setHeart] = useState("black");
  // const [reviewValue, setReviewValue] = useState("");
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleLike =()=>{
    heart ==="black" ? setHeart("red") : setHeart("black")
  };

  const onChangeUserName =(e)=>{
    setUserName(e.target.value);
  };

  const onChangeMessage =(e)=>{
    setMessage(e.target.value);
  };

  const onKeyPress = (e)=>{
    if(e.key === 'Enter'){
      onClick();
    }
  }

  const onClick =()=>{
    alert(username + ': ' + message);
    setUserName('');
    setMessage('');
  };


  return (
    <div className="detailContent">
      <div>
        <TopNav/>
      </div>
      
      <div className="topMain">
        <h1 className="topMainTitle">콜드 브루</h1>
        <span className="topMainSpan">홈 - MENU - 음료 - 콜드 브루 - 돌체 콜드 브루</span>
      </div>
      
      <main>
        <img className="mainImg" src="/images/coldbrew/coldbrew3.jpg" alt="콜드브루3" />
        
        <div className="mainContentBox">

          <div className="dolceColdBrew">
            <h2 className="dolceTitle">돌체 콜드 브루</h2>
            <span className="dolceSpan">Dolce Cold Brew</span>
            <div className="heart">
              <i className="fa-regular fa-heart heartIcon"></i>
            </div>
            <FontAwesomeIcon 
            className="heart" 
            icon={solidHeart} 
            onClick={handleLike}
            style={{color:heart}}
            />
          </div>

          <p className="coffeeExplain">
            무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는
            스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!
          </p>

          <div className="dolceInfo">
            <span className="nutrient">제품 영양 정보</span>
            <span className="size">Tall(톨) / 355ml (12 fl oz)</span>
          </div>

          <div className="dolceContent">
            <ul className="firstContentBox">
              <li>
                <dt>1회 제공량 (kcal)</dt>
                <dd>265</dd>
              </li>
              <li>
                <dt>포화지방 (g)</dt>
                <dd>9</dd>
              </li>
              <li>
                <dt>단백질 (g)</dt>
                <dd>8</dd>
              </li>
            </ul>
            <ul className="secondContentBox">
              <li>
                <dt>나트륨 (mg)</dt>
                <dd>130</dd>
              </li>
              <li>
                <dt>당류 (g)</dt>
                <dd>29</dd>
              </li>
              <li>
                <dt>카페인 (mg)</dt>
                <dd>150</dd>
              </li>
            </ul>
          </div>
          
          <div className="dolceFooter">
            <span>알레르기 유발요인 : 우유</span>
          </div>

          <div className="dolceReview">
            <h3 className="reviewTitle">리뷰</h3>
            <ul className="reviewUl">
              <li className="reviewLi">
                <b>LOVESTAR :</b>돌체 콜드 브루는 사랑입니다!
              </li>
              <li className="reviewLi">
                <b>coffee_lover :</b>오늘도 마시러 왔어요. 맛있어요ㅎㅎ
              </li>
              <li className="reviewLi">
                <b>legend_dev :</b>돌체 콜드 브루는 전설이다.
              </li>
            </ul>
            <div className="reviewBox">
              <input className="reviewId" 
              placeholder="닉네임을 입력해주세요"
              type="text"
              name="username"
              value={username}
              onChange={onChangeUserName}
               />
              <input className="review" 
              placeholder="리뷰를 입력해주세요"
              type="text"
              name="message"
              value={message}
              onChange={onChangeMessage}
              onKeyPress={onKeyPress}
               />
               <button onClick={onClick}>등록하기</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Detail;
