import React, { useState } from 'react';
import NavbarUser from "../components/Nav/NavbarUser"
import CoffeeCart from '../assets/CoffeeCart.svg'
import Bin from '../assets/bin1.svg'
import { Container, Col, Button } from "react-bootstrap"
import ModalPayment from '../components/modal/ModalPayment';


function Cart() {

    const  [showPayment, setShowPayment] = useState(false)
    const handleShow = () => setShowPayment(true)
    const handleClose = () => setShowPayment(false)

    return(
        <Container>
            <NavbarUser/>
                <Col className="mx-5 mt-3">
                    <h2 className="colorPrimary"> My Cart</h2>
                    <p className="colorPrimary">Review Your Order</p>
                    <div className="cardMyCart">
                        <Col className="cardMyCartLeft">
                            <hr/>
                            <div className="cardOrder mb-3">
                                <div className="cardOrderCoffee">
                                    <img src={CoffeeCart} alt="coffee" style={{ width: '5rem' }} />
                                    <div className="ms-3 mt-3">
                                        <h6 className="colorPrimary">Ice Coffe Palm Sugar</h6>
                                        <p className="colorPrimary">Topping : Bill Barry Boba, Bubble Tea Glatin</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="colorPrimary">Rp.33.000</p>
                                    <img src={Bin} alt="bin" />
                                </div>
                            </div>
                            <div className="cardOrder">
                                <div className="cardOrderCoffee">
                                    <img src={CoffeeCart} alt="coffee" style={{ width: '5rem' }} />
                                    <div className="ms-3 mt-3">
                                        <h6 className="colorPrimary">Ice Coffe Palm Sugar</h6>
                                        <p className="colorPrimary">Topping : Bill Barry Boba, Manggo</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="colorPrimary">Rp.36.000</p>
                                    <img src={Bin} alt="bin" />
                                </div>
                            </div>
                            <hr />
                        </Col>
                        <Col className="cardMyCartRight">
                            <hr />
                            <div className="listPaymentInCart" >
                                <p className="colorPrimary">Subtotal</p>
                                <p className="colorPrimary">69.000</p>
                            </div>
                            <div className="listPaymentInCart" >
                                <p className="colorPrimary">Qty</p>
                                <p className="colorPrimary">2</p>
                            </div>
                            <hr />
                            <div className="listPaymentInCart mb-4">
                                <h6 className="colorPrimary">Total</h6>
                                <h6 className="colorPrimary">69.000</h6>
                            </div>
                            <div><Button className='btnAddToCart bgColorPrimary' onClick={handleShow}>Pay</Button>{' '}</div>
                        </Col>
                    </div>
                </Col>
            <ModalPayment showPayment={showPayment} close={handleClose}/>
        </Container>
    )
}

export default Cart