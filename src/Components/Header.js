import React from 'react';

const Header = () => (
    <div>
    {/* <nav className="navbar navbar-light">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/"> <img className="breakthroughGreyTeal"
                src={require("../Images/brLOGOsmall.png")} height="100" width="100" />
                </a>
            <ul className="nav navbar-nav navbar-right">
                <li><a className="item1" href="/Anders">Anders</a></li>
                <li><a className="item1" href="/Lori">Lori</a></li>
                <li><a className="item1" href="/Developer">Contact Us</a></li>
            </ul>
            </div>
            </div>
    </nav> */}


    <nav className="navbar navbar-light">
        <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="/"> <img className="breakthroughGreyTeal"
            src={require("../Images/brLOGOsmall.png")} height="100" width="100" />
            </a>
        </div>
        <ul className="nav navbar-nav navbar-right item2">
            <li><a className="item1" href="/">Home</a></li>
            <li><a className="item1" href="/Anders">Anders</a></li>
            <li><a className="item1" href="/Lori">Lori</a></li>
            <li><a className="item1" href="/Developer">Contact Us</a></li>
        </ul>
        </div>
    </nav>
    </div>        
);

export default Header;