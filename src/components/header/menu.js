import React, { Component } from "react";
import axios from 'axios'

import './menu-style.css';

export default class Menu extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`http://demo5081211.mockable.io/header`)
            .then(res => {
                const headers = res.data;
                this.setState({ headers });
            })
    }

    render() {
        return (
            <div className="menu-section container">
                <ul id="menu" className="menu-content"></ul>
            </div>
        );
    }
}