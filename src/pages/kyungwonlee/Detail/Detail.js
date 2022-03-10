import React from "react";
import TopNav from "../../../components/Nav/Nav";
import "./Detail.scss";

function Detail() {
  return (
    <div>
      <TopNav />

      <section className="detail-page">
        <div className="category">
          <h2>맛있는 커피</h2>
          <span>홈>MENU>음료>에스프레소>블랙 커피</span>
        </div>
        <article>
          <div className="img">{/* <img src="" /> */}</div>
          <div className="coffee-name"></div>
          <div className="description">
            <p>abcdefghijklnopqrstuvwxyz</p>
          </div>
          <div className="nutrition">
            <span>제품 영양 정보</span>
            <span>Tall(톨)/355ml(12 fl oz)</span>
          </div>
          <div className="nutrition-info">
            <div className="kcal">
              <span>1회 제공량 (kcal></span>
              <span>345</span>
            </div>
            <div className="fat">
              <span>포화지방 (g)</span>
              <span>11</span>
            </div>
            <div className="protein">
              <span>단백질 (g)</span>
              <span>11</span>
            </div>
            <div className="Na">
              <span>나트륨 (mg)</span>
              <span>150</span>
            </div>
            <div className="sugar">
              <span>당류 (g)</span>
              <span>35</span>
            </div>
            <div className="caffeine">
              <span>카페인 (mg)</span>
              <span>75</span>
            </div>
          </div>
          <div className="allergic">
            <span>알레르기 유발 요인: 우유</span>
          </div>

          <h3>리뷰</h3>
        </article>
      </section>
    </div>
  );
}

export default Detail;
