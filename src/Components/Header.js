import React from 'react';

const Header = () => (
    <div className="navheader">
        <nav className="nav navbar-light">
            <a className="navbar-brand" href="/">Team Breakthrough</a>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/Anders">Anders</a></li>
                <li><a href="/Lori">Lori</a></li>
                <li><a href="/Developer">Contact Us</a></li>
            </ul>
        </nav>
    </div>    
);

export default Header;