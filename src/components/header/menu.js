import React, { Component } from "react";
import axios from 'axios';

import { Ul } from "./styles";

export default class Menu extends Component {
    state = {
        menus: []
    }

    componentDidMount() {
        axios.get(`https://demo5081211.mockable.io/header`)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
    }

    render() {
        return (
            <div className="menu-section container">
                <Ul id="menu" className="menu-content">
                    {this.state.menus.map((menu, name) =>
                        <li key={name}>
                            <a href="/">{menu.name}</a>
                        </li>
                    )}
                </Ul>
            </div>
        );
    }
}