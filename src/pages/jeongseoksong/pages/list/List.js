import React from 'react'
import "./List.scss"
import cappuccino from "./cappuccino.jpg"



function List() {


    return (
        <div>

    <nav>
        <ul>
            <div className="webucks">WeBucks </div>
            <ol>COFFEE</ol>
            <ol>MENU</ol>
            <ol>STORE</ol>
            <ol>WHAT'S NEW</ol>
        </ul>
    </nav>
    <section className="coldbrew">
        <div className="textbar1">
            <ul>
                <ol className="bigText">콜드 브루 커피</ol>
                {/* <ol><i className="fa-solid fa-mug-hot"></i></ol> */}
                <ol className="smallText">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</ol>
            </ul>
        </div>
        <div className="menuBox">
            <ul>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
                <ol><img className="img" src={cappuccino} alt="" />나이트로 바닐라 크림</ol>
            </ul>
        </div> 
    </section>
    <section className="brewCoffee">
        <div className="textbar2">
            <ul>
                <ol className="bigText">콜드 브루 커피</ol>
                {/* <ol><i className="fa-solid fa-mug-hot"></i></ol> */}
                <ol className="smallText">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</ol>
            </ul>
        </div>
        <div className="menuBox2">
            <ul>
                <ol><img className="img" src={cappuccino} alt="" />아이스커피</ol>
                <ol><img className="img" src={cappuccino} alt="" />오늘의커피</ol>
            </ul>
        </div>
    </section>

</div>
        )
}



                    export default List


