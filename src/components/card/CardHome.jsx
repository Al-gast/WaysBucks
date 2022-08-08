import {Link} from 'react-router-dom';
import {Card, Container,Row, Col} from 'react-bootstrap';
import DummyDrink from '../../DummyData/Drink'
// import Rp from "rupiah-format"

export default function Book() {
    return (
        <Container className="my-5" >
            <h1 className='colorPrimary fw-bold'>Let's Order</h1>
            <Row>
                {DummyDrink.map((items, index) =>
                    <Col className='mt-4'>
                    <Link to={`/detail-product/${items.id}`} className='text-decoration-none'>
                        <Card style={{width: '15.063rem', border:'0', borderRadius:'10', backgroundColor:'#F6DADA'}}>
                            <Card.Img variant='top' src={items.img} className='rounded' style={{ height: '19.5rem' }} />
                            <Card.Body>
                                <p className='fw-bold text-danger' style={{ fontSize:'18px', margin:'0' }}>{items.name}</p>
                                <p style={{ color:'#974A4A', margin:'0' }}>{items.price}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                )}
            </Row>
        </Container>
    );
}