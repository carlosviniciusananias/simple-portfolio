import React, { Component } from "react";

import './menu-style.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu-section container">
                <div>
                    <a href="/"><img src="http://placehold.it/134x50/000/fff" alt="" /></a>
                </div>

                <ul className="menu-content">
                    <li className="menu__item">menu 1</li>
                    <li className="menu__item">menu 2</li>
                    <li className="menu__item">menu 3</li>
                    <li className="menu__item">menu 4</li>
                    <li className="menu__item">menu 5</li>
                </ul>

                <form className="form-search">
                    <input type="text" className="form-control" placeholder="Search" />
                    <button className="btn btn-sucess" type="submit">Search</button>
                </form>
            </div>
        );
    }
}