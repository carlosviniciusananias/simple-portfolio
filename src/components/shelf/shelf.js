import React, { Component } from "react";

import axios from 'axios'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './shelf-style.css'

export default class Shelf extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axios.get(`http://demo5081211.mockable.io/product`)
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 4000,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <div className="shelf-section">
                <div className="container">
                    <Slider {...settings}>
                        {this.state.products.map(product =>
                            <div className="shelf-item">
                                <div className="shelf-img">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <div className="shelf-name">
                                    <p>{product.name}</p>
                                </div>
                                <div className="shelf-price">
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        )
    }
}