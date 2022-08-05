import Navbar from '../components/Nav/navbar';
import {Card, Container, Row, Col} from 'react-bootstrap';
import BannerImg from '../assets/img/Banner.jpg'
import Background from '../components/background/Bg'
import React from 'react';

function Home () {
    return (
        <>
        <Navbar />
        <Container className='home'>
            <Row>
                <Col className="mt-5">
                    <div className="card-item mt-2">
                        <Card id="card-home" className="mt-5">
                            <div className="title-card mt-5 ms-1">
                                <p className="mt-3 ms-5">
                                    WAYSBUCK
                                </p>
                            </div>
                            <div className="content-card ms-3 mt-1 ">
                                <p className="ms-5">
                                Things are changing, but we're still here for you
                                </p>
                            </div>
                            <div className="footer-card ms-5 mt-3">
                                <p className='ms-3'>
                                We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available
                                <br/><br/>Let's Order...
                                </p>
                            </div>
                                <Background/>
                                <img id="img-main-bg" className="ms-3" src={BannerImg} />
                            </Card>
                        </div>
                    </Col>
            </Row>
        </Container>
        <div>
            <div className='listBook'>
                <div>
                    <h2 className='teks'> Let's Order</h2>
                </div>
                {/* <div className='book'>
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Home;