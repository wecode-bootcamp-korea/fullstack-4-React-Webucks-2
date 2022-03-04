
import {Link } from "react-router-dom"; 
import './List.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';


export function GalleryColdBrew(){
    return (
        <ul className="coffee-gall">
            <li>
                <Link className="coffee-thumbnail" to="/detail-seula">
                <div className="coffee-img"><img src="/images/cb-01.jpg" alt="cb-01"/></div>
                <p className="coffee-name">나이트로 바닐라 크림</p>
                </Link>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-02.jpg" alt="cb-02"/></div>
                <p className="coffee-name">나이트로 콜드 브루</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-03.jpg" alt="cb-03"/></div>
                <p className="coffee-name">돌체 콜드 브루</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-04.jpg" alt="cb-04"/></div>
                <p className="coffee-name">바닐라 크림 콜드 브루</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-05.jpg" alt="cb-05"/></div>
                <p className="coffee-name">벨벳 다크 모카 나이트로</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-06.jpg" alt="cb-06"/></div>
                <p className="coffee-name">시그니처 더 블랙 콜드 브루</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-07.jpg" alt="cb-07"/></div>
                <p className="coffee-name">제주 비자림 콜드 브루</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-08.jpg" alt="cb-08"/></div>
                <p className="coffee-name">콜드 브루</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-09.jpg" alt="cb-09"/></div>
                <p className="coffee-name">콜드 브루 몰트</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/cb-10.jpg" alt="cb-10"/></div>
                <p className="coffee-name">콜드 브루 오트 라떼</p>
                </span>
            </li>
        </ul>
    );
}
export function GalleryBrewed(){
   return (
        <ul className="coffee-gall">
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/b-01.jpg" alt="b-01"/></div>
                <p className="coffee-name">아이스 커피</p>
                </span>
            </li>
            <li>
                <span className="coffee-thumbnail">
                <div className="coffee-img"><img src="/images/b-02.jpg" alt="b-02"/></div>
                <p className="coffee-name">오늘의 커피</p>
                </span>
            </li>
        </ul>
    );
}

function List(){
    return (
        <div className="wrap-default">
        <div className="container">
        <Menu />
            <section className="coffee-section cold-brew">
                <h3 className="coffee-section-title">콜드 브루 커피 ☕</h3>
                <GalleryColdBrew/>
            </section>
            <section className="coffee-section brewed">
                <h3 className="coffee-section-title">브루드 커피 ☕</h3>
                <GalleryBrewed/>
            </section>
        </div>
        <Footer/>
    </div>
    );
}

export default List;