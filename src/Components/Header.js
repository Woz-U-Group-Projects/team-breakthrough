import React from 'react';

const Header = () => (
    <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/">Team Breakthrough</a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="/Anders">Anders</a></li>
                <li><a href="/Lori">Lori</a></li>
                <li><a href="/Developer">Contact Us</a></li>
            </ul>
        </div>
        </nav>
    </div>    
);

export default Header;