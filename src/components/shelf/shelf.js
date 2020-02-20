import React, { Component } from "react";
import axios from 'axios'
import Slider from "react-slick";

import { Title } from "./styles";
import { ShelfSection } from "./styles";
import { ShelfItem } from "./styles";
import { ShelfName } from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
            <ShelfSection>
                <div className="container">
                    <Title>
                        <span>CA-MI-SE-TAS!</span> As melhores marcas!
                    </Title>
                    <Slider {...settings}>
                        {this.state.products.map(product =>
                            <ShelfItem>
                                <div className="shelf-img">
                                    <img src={product.image} alt={product.skuname} />
                                </div>
                                <ShelfName>
                                    <p>{product.skuname}</p>
                                </ShelfName>
                                <div className="shelf-price">
                                    <p>{product.bestPrice}</p>
                                </div>
                            </ShelfItem>
                        )}
                    </Slider>
                </div>
            </ShelfSection>
        )
    }
}