import React from "react";
import "./Detail.scss";
import TopNav from '../Nav/TopNav';

function Detail() {
  return (
    <>
      <div className="Topnav">
        <TopNav/>
      </div>
      <div id="topMain">
        <h1>콜드 브루</h1>
        <span>홈 - MENU - 음료 - 콜드 브루 - 돌체 콜드 브루</span>
      </div>
      <main>
        <img src="/images/coldbrew/coldbrew3.jpg" alt="콜드브루3" />
        <div id="mainContentBox">
          <div id="dolceColdBrew">
            <h2>돌체 콜드 브루</h2>
            <span>Dolce Cold Brew</span>
            <i className="fa-light fa-heart"></i>
          </div>
          <p>
            무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는
            스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를 만나보세요!
          </p>
          <div id="dolceHeader">
            <span id="nutrient">제품 영양 정보</span>
            <span id="size">Tall(톨) / 355ml (12 fl oz)</span>
          </div>
          <div id="dolceContent">
            <ul id="firstContentBox">
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
            <ul id="secondContentBox">
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
          <div id="dolceFooter">
            <span>알레르기 유발요인 : 우유</span>
          </div>
          <div id="dolceColdBrewReview">
            <h3>리뷰</h3>
            <ul>
              <li>
                <b>LOVESTAR</b>돌체 콜드 브루는 사랑입니다!
              </li>
              <li>
                <b>coffee_lover</b>오늘도 마시러 왔어요. 맛있어요ㅎㅎ
              </li>
              <li>
                <b>legend_dev</b>돌체 콜드 브루는 전설이다.
              </li>
            </ul>
            <div id="reviewInput">
              <span>리뷰를 입력해주세요.</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Detail;
