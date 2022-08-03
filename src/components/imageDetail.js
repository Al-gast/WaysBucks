import Card from 'react-bootstrap/Card';
import Coffee from '../assets/coffee.svg'

function ImageDetail() {
    return (
        <Card.Img variant="top" src={Coffee} style={{ width: '18rem' }} />
    );
}

export default ImageDetail;