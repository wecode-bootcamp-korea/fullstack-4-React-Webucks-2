import {Link} from "react-router-dom"; 
import {useState,useEffect} from "react";
import '../List/List.scss';


function CoffeeCard(){
    //const Params = useParams();
    const [coffeeList,setCoffeeList] = useState([]);
    useEffect(()=>{
        fetch(
            '/data/coffeeList.json',{method:'GET'})
            .then(res => res.json())
            .then( data =>{
                setCoffeeList(data);
            });     
    },[])
    return(
        <ul className="coffee-gall">
            {coffeeList.map =(coffeeName=>{
                return(
                    <li>
                    <Link className="coffee-thumbnail" to={`/detail-seula`}>
                        <div className="coffee-img"><img src={coffeeName.imgUrl} alt={coffeeName.imgAlt}/></div>
                        <p className="coffee-name">{coffeeName.name}</p>
                    </Link>
                    </li>
                );
            })}
        </ul>
    );
    
}

export default CoffeeCard;