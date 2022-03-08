import {Link} from "react-router-dom"; 
import '../List/List.scss';


function CoffeeCard({ list }){
   
        return(                   
            <li>
                <Link className="coffee-thumbnail" to={`/coffee/`+list.id}>
                <div className="coffee-img"><img src={list.imgUrl} alt={list.imgAlt}/></div>
                <p className="coffee-name">{list.name}</p>
                </Link>
            </li>                                         
        );
}

export default CoffeeCard;