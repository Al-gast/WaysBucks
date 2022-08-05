import React from 'react'
import {Container, Row, Card} from 'react-bootstrap'
import Nav from "../components/Nav/navbar"
import ProfileImg from '../assets/profile.svg'

export default function Profile() {
    return (
        <Container>
            <Nav/>
            <div className='myProfileContainer'>
                <div>
                    <h4 className='colorPrimary mb-4'>My Profile</h4>
                    <div className='cardProfile'>
                        <div className='me-4'>
                                <Card.Img src={ProfileImg} style={{ width: '10rem' }} />
                        </div>
                        <div>
                            <div>
                                <h6>Full Name</h6>
                                <p>Budi Genteng</p>
                            </div>
                            <div>
                                <h6>Email</h6>
                                <p>budi@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='colorPrimary mb-4'>My Transaction</h4>
                    <div className='cardProfile'>
                        <div className='me-4'>
                                <Card.Img src={ProfileImg} style={{ width: '10rem' }} />
                        </div>
                        <div>
                            <div>
                                <h6>Full Name</h6>
                                <p>Budi Genteng</p>
                            </div>
                            <div>
                                <h6>Email</h6>
                                <p>budi@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
