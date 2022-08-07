import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarUser from "../components/Nav/NavbarUser"
import React, { useState } from 'react';

import CheckToping from '../assets/checkToping.svg'

import DummyTopping from '../DummyData/Topping'
import DummyDrink from '../DummyData/Drink'



function DetailProduct() {
    const params = useParams()
    const data = DummyDrink[parseInt(params.id - 1)]
    const [topping] = useState(DummyTopping)

    const [show, setShow] = useState(false)
    const handleCheck = () =>{
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    const [toping, setToping] = useState([])
    const handleOnChange = (e) => {
        let updateToping = [...toping]
        if(e.target.checked){
            updateToping = [...toping, e.target.value ]
        }else{
            updateToping.splice(...toping.indexOf(e.target.value))
        }
        setToping(updateToping)
    }

    const [counter, setCounter] = useState(0)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setCounter(counter + 1)
    }

    return (
        <>
            <NavbarUser counter={counter} />
            <Container className="detailProductContainer">
            <div className="me-5">
                <Card.Img src={data.img} style={{ width: '24rem' }} />
            </div>
            <div>
                <div className="mb-5">
                    <h1 className='colorPrimary fw-bold'>{data.name}</h1>
                    <h5 className='colorSecondary fw-bold'>{data.price}</h5>
                </div>
                <div className="mb-3">
                    <h5 className='colorSecondary fw-bold mb-3'>Toping</h5>
                    {/* MAPPING */}
                    <Row>
                    {topping.map((item, index) => (
                        <div key={index} className="topping-datas ms-4 col d-flex">
                            <label htmlFor={item.id} className='checkContainer'>
                                <input
                                type="checkbox"
                                id={item.id}
                                onChange={handleOnChange}
                                value={item.name}
                                name='toping'
                                className="checkInput"
                                />
                                <img
                                src={CheckToping}
                                alt="check"
                                className="checkMark"
                                />
                                <img src={item.img}
                                alt=""
                                onClick={handleCheck}
                                htmlFor={item.id}
                                width='60'
                                className="align-item-center"
                                />
                            </label>
                            <p className="colorPrimary f12 text-center">{item?.name}</p>
                        </div>
                    ))}
                    </Row>
                    {/* END MAPPING */}
                </div>
                <div className='totalDetailProduct'>
                    <h4 className='colorSecondary fw-bold'>Total</h4>
                    <h4 className='colorSecondary fw-bold'>{data.price}</h4>
                </div>
                <div><Button className='btnAddToCart bgColorPrimary' onClick={handleSubmit}>Add To Cart</Button>{' '}</div>
            </div>
            </Container>
        </>
    )
}

export default DetailProduct