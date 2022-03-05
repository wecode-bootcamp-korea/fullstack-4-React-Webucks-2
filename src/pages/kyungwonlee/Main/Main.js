import React from "react";
import TopNav from "../../../components/Nav/Nav";
import "./Main.scss";

function Main() {
  return (
    <div>
      <div>
        <TopNav />
      </div>

      <section className="product">
        <div className="product-coffee">
          <h5 className="title-kyungwon">맛있는 커피</h5>
          <i className="fa-solid fa-mug-hot i-kyungwon"></i>
          <p>세상에서 가장 맛있는 커피</p>
        </div>

        <ul className="coffee-list">
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/black-coffee.jpg" alt="블랙 커피" />
            </div>
            <div className="name">블랙 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/milk-coffee.jpg" alt="밀크 커피" />
            </div>
            <div className="name">밀크 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/mocha-coffee.jpg" alt="모카 커피" />
            </div>
            <div className="name">모카 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/vanila-coffee.jpg" alt="바닐라 커피" />
            </div>
            <div className="name">바닐라 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/caramel-coffee.jpg" alt="카라멜 커피" />
            </div>
            <div className="name">카라멜 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/dessert-coffee.jpg" alt="커피 그리고 디저트" />
            </div>
            <div className="name">커피 그리고 디저트</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/drip-coffee.jpg" alt="드립 커피" />
            </div>
            <div className="name">드립 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/fusioa-coffee.jpg" alt="푸지오아 커피" />
            </div>
            <div className="name">푸지오아 커피</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/hot-choco.jpg" alt="핫초코" />
            </div>
            <div className="name">핫초코</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/magic-coffee.jpg" alt="매직 커피" />
            </div>
            <div className="name">매직 커피</div>
          </li>
        </ul>
      </section>

      <section className="product">
        <div className="product-coffee">
          <h5 className="title-kyungwon">달콤한 음료</h5>
          <i className="fa-solid fa-mug-hot i-kyungwon"></i>
          <p>세상에서 가장 달콤한 음료</p>
        </div>

        <ul className="coffee-list">
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/strawberry-shake.jpg" alt="딸기 쉐이크" />
            </div>
            <div className="name">딸기 쉐이크</div>
          </li>
          <li className="coffee">
            <div className="img-kyungwon">
              <img src="img/lemon-ade.jpg" alt="블루레몬 에이드" />
            </div>
            <div className="name">블루레몬 에이드</div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
