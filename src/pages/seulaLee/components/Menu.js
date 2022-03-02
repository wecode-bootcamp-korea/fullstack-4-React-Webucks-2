import './Menu.scss';

const Menu = ()=>{
    return (
        <nav className="webucks-nav">
            <h2 className="hidden">webucks logo</h2>
            <h1 className="webucks-logo">webucks</h1>
            <ul className="menu-bar">
                <li>coffee</li>
                <li>menu</li>
                <li>store</li>
                <li>what's new</li>
            </ul>
        </nav>
    );
}

export default Menu;