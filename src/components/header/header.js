import React, { Component } from "react";

import Navbar from './navbar';
//import Search from './search';
import Menu from './menu';

import './menu-style.css';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Menu />
            </>
        );
    }
}