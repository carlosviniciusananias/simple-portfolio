import React, { Component } from "react";
import styled from 'styled-components';
import axios from 'axios'
import Slider from "react-slick";
import "./shelf-style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShelfSection = styled.div`
    margin: 50px 0;
`;

const ShelfItem = styled.div`
    max-width: 295px;
`;

const ShelfName = styled.div`
    margin: 10px 0;
`;


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
                    <h2 className="main--title"><span>CA-MI-SE-TAS!</span> As melhores marcas!</h2>
                    <Slider {...settings}>
                        {this.state.products.map(product =>
                            <ShelfItem>
                                <div className="shelf-img">
                                    <img src={product.img} alt={product.name} />
                                </div>
                                <ShelfName>
                                    <p>{product.name}</p>
                                </ShelfName>
                                <div className="shelf-price">
                                    <p>{product.price}</p>
                                </div>
                            </ShelfItem>
                        )}
                    </Slider>
                </div>
            </ShelfSection>
        )
    }
}