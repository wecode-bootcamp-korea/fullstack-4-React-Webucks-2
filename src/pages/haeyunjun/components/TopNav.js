import React from 'react'
import './TopNav.scss'

function NavBar(){
    return (
        <nav className="haeyun-navigation-bar">
            <h1 className="webucks-logo">WeBucks</h1>
            <ul className="menu-bar">
                <li className="menu-list">COFFEE</li>
                <li className="menu-list">MENU</li>
                <li className="menu-list">STORE</li>
                <li className="menu-list">WHAT'S NEW</li>
            </ul>
        </nav>
		)
};

export default NavBar