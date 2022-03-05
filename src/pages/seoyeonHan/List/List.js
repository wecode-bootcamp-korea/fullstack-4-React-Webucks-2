import React, { useEffect, useState } from "react";
import "./List.scss";
// import Detail from '../Detail/Detail';
// import {Link} from 'react-router-dom';
import TopNav from "../Nav/TopNav";
import Card from "./Card";

function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/CoffeeData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  // function show(){
  //   return (
  //     <Detail/>
  //   )
  // }
  return (
    <div>
      <TopNav/>
      {coffeeList.map(coffee => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>

    // <>
    //   <div className="Topnav">
    //     <TopNav />
    //   </div>

    //   <dl>
    //     <dt id="coldBrew">
    //       <h1>콜드 브루 커피</h1>
    //       <img
    //         className="decafImg"
    //         src="images/logo_decaf.png"
    //         alt="디카페인 로고"
    //       />
    //       <span className="decafInfo">
    //         디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
    //       </span>
    //     </dt>

    //     <dd>
    //       <ul id="productColdbrew">
    //         <li className="menuData">
    //           <dl>
    //             <dt className="imgDt">
    //               <img src="images/coldbrew/coldbrew1.jpg" alt="콜드브루1" />
    //             </dt>
    //             <dd>나이트로 바닐라 크림</dd>
    //           </dl>
    //         </li>
    //       </ul>
    //     </dd>
    //   </dl>
    // </>
  );
}

export default List;
