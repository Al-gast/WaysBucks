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
                    <h1 className='colorPrimary'>Ice Coffe Palm Sugar</h1>
                    <p className='colorSecondary'>Rp.27.000</p>
                </div>
                <div>
                    <h5 className='colorSecondary'>Toping</h5>
                    <Figure >
                        <Figure.Image src={Toping1} width='50'/>
                        <Figure.Caption className='colorPrimary'>
                            Bubble Tea Glatin
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className='totalDetailProduct'>
                    <h5 className='colorSecondary'>Total</h5>
                    <h5 className='colorSecondary'>Rp.27.000</h5>
                </div>
                <div><Button className='btnAddToCart bgColorPrimary'>Add To Cart</Button>{' '}</div>
            </div>
        </Container>
    );
}

export default CardDetailProduct;