import React, { useEffect, useState } from "react";
import "./List.scss";
import TopNav from "../Nav/TopNav";
import Card from "../List/Card";

function List() {
  const [coffeeList, setCoffeeList] = useState([]);
  // const [brewList, setBrewList] = useState([]);

  //coffeeList
  useEffect(() => {
    fetch("/data/seoyeonData/CoffeeList.json")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
      });
  }, []);

  //brewList
  // useEffect(() => {
  //   fetch("/data/seoyeonData/CoffeeList.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBrewList(data);
  //     });
  // }, []);

  return (
    <>
      <TopNav />
      {/* coffeeList */}
      <div className="cold">
        <div className="coldBrewHead">
          <div className="coldBrewName">
            <b>콜드 브루 커피</b>
          </div>
          <img
            className="decafImg"
            src="images/logo_decaf.png"
            alt="디카페인 로고"
          />
          <div className="decafInfo">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </div>
        </div>
        <ul>
          {coffeeList.map((coffee) => (
            <Card coffee={coffee} />
          ))}
        </ul>
      </div>

      {/* brewList */}
      {/* <div className="brew">
        <div className="BrewHead">
          <div className="BrewName"><b>브루드 커피</b></div>
          <img
            className="decafImg"
            src="images/logo_decaf.png"
            alt="디카페인 로고"
          />
          <div className="decafInfo">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </div>
        </div>
          <ul>
            {brewList.map((coffee) => (
              <Card coffee={coffee} />
            ))}
          </ul>
      </div> */}
    </>
  );
}

export default List;
