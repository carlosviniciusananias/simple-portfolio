import React, { Component } from "react";

import Navbar from './navbar';
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