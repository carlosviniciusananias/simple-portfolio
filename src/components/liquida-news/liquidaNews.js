import React, { Component } from "react";

import './liquida-news-style.css';

export default class LiquidaNews extends Component {
    render() {
        return (
            <div className="liquida-news-section">
                <div className="container">
                    <div className="liquida-news-offers">
                        <div className="box-banner">
                            <a href="/"><img src="http://placehold.it/600x350/357/fff" alt="" /></a>
                        </div>
                        <div className="box-banner">
                            <a href="/"><img src="http://placehold.it/600x350/357/fff" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}