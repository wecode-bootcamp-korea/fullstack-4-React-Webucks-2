import React from "react";
import "./Footer.scss";

function Footer(){
    return(
        <div className="footerBoxAll">
            <div className="footerBox1">
                <ul>
                    <li>COMPANY</li>
                    <li>한눈에 보기</li>
                    <li>스타벅스 사명</li>
                    <li>스타벅스 소개</li>
                    <li>국내 뉴스룸</li>
                    <li>세계의 스타벅스</li>
                    <li>글로벌 뉴스룸</li>
                </ul>
            </div>
            <div className="footerBox2">
                <ul>
                    <li>CORPORATE SALES</li>    
                    <li>단체 및 기업 구매 안내</li>    
                </ul>    
            </div>
            <div className="footerBox3">
                <ul>
                    <li>PARTNERSHIP</li>    
                    <li>신규 입점 제의</li>    
                    <li>협력 고객사 등록 신청</li>    
                </ul>    
            </div>
            <div className="footerBox4">
                <ul>
                    <li>ONLINE COMMUNITY</li>
                    <li>페이스북</li>    
                    <li>트위터</li>    
                    <li>유튜브</li>    
                    <li>블로그</li>    
                    <li>인스타그램</li>    
                </ul>    
            </div>
            <div className="footerBox5">
                <ul>
                    <li>RECRUIT</li>    
                    <li>채용 소개</li>    
                    <li>채용 지원하기</li>    
                </ul>    
            </div>
            <div className="footerBox6">
                <ul>
                    <li>WEBUCKS</li>    
                </ul>    
            </div>
        </div>
    );
};

export default Footer;