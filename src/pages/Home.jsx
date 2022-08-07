import NavbarHome from '../components/Nav/NavbarHome';
import {Card, Container, Row, Col} from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { useContext, useState } from 'react';
// import HomeImg from '../assets/img/background.svg'
import BannerImg from '../assets/img/Banner.jpg'
import Background from '../components/background/Bg'
import React from 'react';
import CardHome from '../components/card/CardHome'
import NavbarUser from '../components/Nav/NavbarUser'
// import DummyData from "../../DummyData/Drink"
// import Rp from "rupiah-format"

// const [drinks] = useState(DummyData)

//     const moving = useNavigate()

//     const moveToDetailDrink = (id) => {
//         moving('/detail-drink/' + id)
//     }

function Home () {
const [state, dispatch] = useContext(UserContext)
console.log(state.isLogin);
    return (
        <>
        {state.isLogin === false?<NavbarHome/>:<NavbarUser/>}
        <Container className='home'>
            <Row>
                <Col className="">
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
                                <img id="img-main-bg" className="ms-3" src={BannerImg} alt=''/>
                            </Card>
                        </div>
                    </Col>
            </Row>
        </Container>
        <div className='list-card'>
            <CardHome />
        </div>
        </>
    )
}

export default Home;