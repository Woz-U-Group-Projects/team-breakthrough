import React from 'react';

const Header = () => (
    <div className="navheader">
        <nav className="nav navbar-light">
            <a className="navbar-brand" href="/"> <img className="breakthroughGreyTeal"
                src={require("../Images/brLOGOsmall.png")} height="100" width="100" />
                </a>



            <ul className="nav navbar-nav navbar-right">
                <li><a id="Anders1" href="/Anders">Anders</a></li>
                <li><a id="Lori1" href="/Lori">Lori</a></li>
                <li><a id="Contact1" href="/Developer">Contact Us</a></li>
            </ul>
        </nav>
    </div>    
);

export default Header;