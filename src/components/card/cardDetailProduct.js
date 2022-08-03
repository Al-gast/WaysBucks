import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Coffee from '../../assets/coffee.svg'
import Figure from 'react-bootstrap/Figure';
import Toping1 from '../../assets/toping1.svg'

function CardDetailProduct() {
    return (
        <Container className='detailProductContainer'>
            <div>
            <Card.Img src={Coffee} style={{ width: '22rem' }} />
            </div>
            <div>
                <div>
                    <h1 className=''>Ice Coffe Palm Sugar</h1>
                    <p>Rp.27.000</p>
                </div>
                <div>
                    <p>Toping</p>
                    <Figure>
                        <Figure.Image src={Toping1} width='60'/>
                        <Figure.Caption>
                            Bubble Tea Glatin
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className='totalDetailProduct'>
                    <p>Total</p>
                    <p>Rp.27.000</p>
                </div>
                <div><Button className='colorPrimary'>Add To Cart</Button>{' '}</div>
            </div>
        </Container>
    );
}

export default CardDetailProduct;