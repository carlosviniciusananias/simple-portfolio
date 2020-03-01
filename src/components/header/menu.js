import React, { Component } from "react";
import axios from 'axios'

export default class Menu extends Component {
    state = {
        menus: []
    }

    componentDidMount() {
        axios.get(`http://demo5081211.mockable.io/header`)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
    }

    render() {
        return (
            <div className="menu-section container">
                <ul id="menu" className="menu-content">
                    {this.state.menus.map((menu, name) =>
                        <div key={name}>
                            <p>{menu.name}</p>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}