 import React from 'react'
import './CoffeeCard.scss'
import {Link} from "react-router-dom"; 


function CoffeeCard({list}) {

    return (
        <div >
            {/* <div className="menuBox">
                <ul>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림1</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림2</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림3</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림4</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림5</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림6</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림7</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림8</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림9</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />나이트로 바닐라 크림10</ol>
                </ul>
            </div> 

            <div className="menuBox2">
                <ul>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />아이스커피</ol>
                    <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />오늘의커피</ol>
                </ul>
            </div> */}

            <Link className="coffee-thumbnail" to={`/coffee/`+list.id}>
                <div className="coffee-img"><img src={list.imgUrl} alt={list.imgAlt}/></div>
                <p className="coffee-name">{list.name}</p>
            </Link>
        </div>
    )
}

                    export default CoffeeCard

