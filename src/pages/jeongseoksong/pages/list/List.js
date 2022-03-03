import React from 'react'
import "./List.scss"
import TopNav from '../../components/TopNav/TopNav.js'




function List() {


    return (
        <div>
    <TopNav />
    <section className="coldbrew">
        <div className="textbar1">
            <ul>
                <ol className="bigText">콜드 브루 커피</ol>
                {/* <ol><i className="fa-solid fa-mug-hot"></i></ol> */}
                <ol className="smallText">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</ol>
            </ul>
        </div>
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
        </div>  */}
    </section>
    <section className="brewCoffee">
        <div className="textbar2">
            <ul>
                <ol className="bigText">브루드 커피</ol>
                {/* <ol><i className="fa-solid fa-mug-hot"></i></ol> */}
                <ol className="smallText">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</ol>
            </ul>
        </div>
        {/* <div className="menuBox2">
            <ul>
                <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />아이스커피</ol>
                <ol><img className="img" src={"./images/cappuccino.jpg"} alt="" />오늘의커피</ol>
            </ul>
        </div> */}
    </section>

</div>
        )
}



                    export default List


