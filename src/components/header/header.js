import React, { Component } from "react";

import Navbar from './navbar';
//import Search from './search';
import Menu from './menu';


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