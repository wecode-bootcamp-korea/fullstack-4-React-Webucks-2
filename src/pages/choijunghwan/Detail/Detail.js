import React from 'react';
import "./Detail.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import TopNav from '../components/TopNav/TopNav';

export default function Detail () {
  return (
    <div className='Detail'>
        <div className="bigContainer">
        <TopNav/>
        <span className="productCategory">콜드 브루</span>
        <nav className="miniNav">
          <ol>
            <li>홈 &gt;</li>
            <li>MENU &gt;</li>
            <li>음료 &gt;</li>
            <li>에스프레소 &gt;</li>
            <li>화이트 초콜릿 모카</li>
          </ol>
        </nav>
        <div className="container">
          <img alt="coffee" src="https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <div className="productDetail">
            <div className="productName">
              <span id="koName">화이트 초콜릿 모카</span
              ><span id="enName">White Chocolate Mocha</span>
              <button className="heartIcon">
              <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="productDescription">
              달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어
              휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프로소가 부드럽게
              어우러진 커피
            </div>
            <div className="energyTitle">
              <span>제품 영양 정보</span><span>Tall(톨) / 355ml (12 fl oz)</span>
            </div>
            <section id="energySection">
              <div id="right">
                <div id="kcalBox">
                  <span>1회 지공량 (kcal)</span>
                  <span id="kcal">345</span>
                </div>
                <div id="fatBox">
                  <span>포화지방 (g)</span>
                  <span id="fat">11</span>
                </div>
                <div id="proteinBox">
                  <span>단백질 (g)</span>
                  <span id="protein">11</span>
                </div>
              </div>
              <div id="left">
                <div id="naBox">
                  <span>나트륨 (mg)</span>
                  <span id="na">150</span>
                </div>
                <div id="sugarBox">
                  <span>당류 (g)</span>
                  <span id="sugar">35</span>
                </div>
                <div id="caffeineBox">
                  <span>카페인 (mg)</span>
                  <span id="caffeine">75</span>
                </div>
              </div>
            </section>
            <div className="allergyBox">
              알레르기 유발 요인 :
              <span id="allergy">우유</span>
            </div>
            <div className="commentHead">리뷰</div>
            <section className="commentSection">
              <ol className="commentLists">
                <li>
                  <span className="nickname">coffee_lover</span>
                  <span className="comment">너무 맛있어요!</span>
                </li>
                <li>
                  <span className="nickname">CHOCO7</span>
                  <span className="comment"
                    >오늘도 화이트 초콜릿 모카를 마시러 갑니다.</span
                  >
                </li>
                <li>
                  <span className="nickname">legend_dev</span>
                  <span className="comment"
                    >진짜 화이트 초콜릿 모카는 전설이다.진짜 화이트 초콜릿 모카는
                    전설이다.진짜 하이트 초...</span
                  >
                </li>
              </ol>
              <form id="commentForm">
                <input placeholder="리뷰를 입력해주세요" name="comment" />
              </form>
            </section>
          </div>
        </div>
      </div>
      <footer>
        <ol>
          COMPANY
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ol>
        <ol>
          CORPORATE SALES
          <li>단체 및 기업 구매 안내</li>
        </ol>
        <ol>
          PARTNERSHIP
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ol>
        <ol>
          ONLINE COMMUNITY
          <li>페이스북</li>
          <li>트위터</li>
          <li>유튜브</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ol>
        <ol>
          RECRUIT
          <li>채용 소개</li>
          <li>채용 지원하기</li>
        </ol>
        <ol>
          WEBUCKS
        </ol>
      </footer>
   </div>)  
}
 

    
