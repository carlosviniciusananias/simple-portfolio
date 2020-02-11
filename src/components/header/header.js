import React from "react";

import './header.css';

const Header = () => {
    return (
        <nav className="header-navbar">
            <div className="navbar-content">
                <a href="#" className="navbar__item">menu 1</a>
            </div>
            <div className="navbar-content">
                <a href="#" className="navbar__item">menu 2</a>
            </div>
            <div className="navbar-content">
                <a href="#" className="navbar__item">menu 3</a>
            </div>
            <div className="navbar-content">
                <a href="#" className="navbar__item">menu 4</a>
            </div>
            <form className="form-search">
                <input type="text" className="form-control" placeholder="Search" />
                <button className="btn btn-sucess" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Header;