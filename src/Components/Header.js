import React from 'react';

const Header = () => (
    <div className="navheader">
        <nav className="nav navbar-light">
            <a className="navbar-brand" href="/"> <img className="breakthroughGreyTeal"
                src={require("../Images/brLOGOsmall.png")} height="100" width="100" />
                </a>



            <ul className="nav navbar-nav navbar-right">
                <li><a href="/Anders">Anders</a></li>
                <li><a href="/Lori">Lori</a></li>
                <li><a href="/Developer">Contact Us</a></li>
            </ul>
        </nav>
    </div>    
);

export default Header;