import React, { Component } from "react";
import './tipbar-style.css';

export default class Tipbar extends Component {
    render() {
        return (
            <div className="tipbar-section">
                <div className="tipbar container">
                    <div className="tipbar-item">
                        <img src="http://placehold.it/25x25" alt="" />
                        <div className="tipbar-text">
                            <p></p>
                        </div>
                    </div>
                    <div className="tipbar-item">

                    </div>
                    <div className="tipbar-item">

                    </div>
                </div>
            </div>
        );
    }
}