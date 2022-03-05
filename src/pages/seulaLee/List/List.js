import './List.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import CoffeeCard from '../components/CoffeeCard';

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
                
            </section>
        </div>
        <Footer/>
    </div>
    );
}

export default List;