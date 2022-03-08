import React, { useEffect, useState } from "react";
import "./List.scss";
import TopNav from "../Nav/TopNav";
import Card from "./Card";

function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch("/data/CoffeeList.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <div>
      <TopNav/>
      {coffeeList.map(coffee => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
}

export default List;
