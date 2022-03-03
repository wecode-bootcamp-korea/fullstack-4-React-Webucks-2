import './List.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import CoffeeCard from '/CoffeeCard.js';

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
                <CoffeeCard/>
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