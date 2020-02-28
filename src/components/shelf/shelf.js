import React, { Component } from "react";
import axios from 'axios'
import Slider from "react-slick";
import { Title } from "./styles";
import { ShelfSection } from "./styles";
import { ShelfItem } from "./styles";
import { ShelfName } from "./styles";
import { ShelfImg } from "./styles";

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
            arrow: true,
            infinite: true,
            autoplay: true,
            speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <ShelfSection>
                <div className="container">
                    <Title>
                        <span>AS MELHORES</span> marcas você encontra aqui!
                    </Title>                    <Slider {...settings}>
                        {this.state.products.map(product =>
                            <ShelfItem>
                                <ShelfImg>
                                    <img src={product.image} alt={product.skuname} />
                                </ShelfImg>
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