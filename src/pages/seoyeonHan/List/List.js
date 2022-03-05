import React, { useEffect, useState } from "react";
import "./List.scss";
import TopNav from "../Nav/TopNav";
import Card from "./Card";

function List() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [brewList, setBrewList] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/data/CoffeeData.json", {
  //     method: "GET",
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCoffeeList(data);
  //     });
  // }, []);

  return (
    <div>
      <TopNav />
      <div className="cateBar">
        <div className="cateName">콜드 브루 커피</div>
        <img
          className="decafImg"
          src="images/logo_decaf.png"
          alt="디카페인 로고"
        />
        <div className="decafInfo">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </div>
      </div>
      <article>
        <ul>
          {coffeeList.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </article>

      <div className="cateBar">
        <div className="cateName">콜드 브루 커피</div>
        <img
          className="decafImg"
          src="images/logo_decaf.png"
          alt="디카페인 로고"
        />
        <div className="decafInfo">
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </div>
      </div>
      <article>
        <ul>
          {brewList.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </article>
    </div>
  );
}

export default List;
