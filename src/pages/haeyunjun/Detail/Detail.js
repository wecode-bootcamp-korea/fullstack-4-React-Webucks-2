import React, {useState} from 'react'
import './Detail.scss'
import NavBar from '../components/TopNav.js'


function Detail() {
  const [coffeeDetail, setCoffeeDetail] = useState({
    "id": 0,
    "name": "",
    "EnglishName": "",
    "desc": "",
    "size": "",
    "volume": "",
    "nutrition": [],
    "allergie": "",
    "comments": [],
    "imgURL": ""
    });

    // useEffect(() => {

    // }, [])
    
    return (
        <>
            <NavBar/>
        </>
    )
}

export default Detail