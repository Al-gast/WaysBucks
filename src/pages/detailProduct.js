import { Container, Row, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from "../components/Nav/navbar"
import React, { useState } from 'react';

import DummyTopping from '../DummyData/Topping'

import Coffee from '../assets/coffee.svg'

// import CardDetailProduct from "../components/card/cardDetailProduct"

function DetailProduct() {

    const [topping] = useState(DummyTopping)

    return (
        <div>
            <Nav />
            <Container className="detailProductContainer">
            <div className="me-5">
                <Card.Img src={Coffee} style={{ width: '24rem' }} />
            </div>
            <div>
                <div className="mb-5">
                    <h1 className='colorPrimary'>Ice Coffe Palm Sugar</h1>
                    <p className='colorSecondary'>Rp.27.000</p>
                </div>
                <div className="mb-3">
                    <h5 className='colorSecondary'>Toping</h5>
                    {/* MAPPING */}
                    <Row>
                    {topping.map((item, index) => (
                        <div key={index} className="topping-datas ms-4 col">
                            <div className="img-data-toping mt-3">
                                <img className="" src={item?.img}/>
                                <p className="colorPrimary">{item?.name}</p>
                            </div>
                        </div>
                    ))}
                    </Row>
                    {/* END MAPPING */}
                </div>
                <div className='totalDetailProduct'>
                    <h5 className='colorSecondary'>Total</h5>
                    <h5 className='colorSecondary'>Rp.27.000</h5>
                </div>
                <div><Button className='btnAddToCart bgColorPrimary'>Add To Cart</Button>{' '}</div>
            </div>
            </Container>
        </div>
    )
}

export default DetailProduct