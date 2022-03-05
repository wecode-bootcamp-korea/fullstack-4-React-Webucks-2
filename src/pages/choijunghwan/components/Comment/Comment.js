import React ,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import "./Comment.scss";

export default function Comment ({id,comment,commentArr,setCommentArr}){
    const [heart, setHeart] = useState("black");

    const toggleHeart = ()=>{
        heart == "black" ?  setHeart("red"):setHeart("black")
        }
    
    const deleteComment = () =>{
        
    setCommentArr(commentArr.filter(i=>i.id !== id));

    }

    return(
    <li className="liJung">
        <span className="nickname">익명</span>
        <span className="comment">{comment}</span>
        <button className="heartIcon" onClick={toggleHeart}>
              <FontAwesomeIcon className='icon' icon={faHeart} style={{color:heart}} />
        </button>
        <button className="deleteBtn" onClick={deleteComment}>❌</button>
    </li>)
}


