import React, { useEffect, useState } from "react";
import TopNav from "../../../components/Nav/Nav";
import Card from "../components/Card/Card";
import "./Main.scss";

function Main() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    // 데이터를 가져오는 로직을 작성한다.
    fetch("data/CoffeeList-kyungwon.json")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
      });
  }, []);
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
          {coffeeList.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
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
