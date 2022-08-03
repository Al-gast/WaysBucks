import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/logo.svg'
import Basket from '../assets/basket.svg'
import User from '../assets/user.svg'

function Nav() {
    return (
        <Navbar>
        <Container>
            <Navbar.Brand href="#home">
            <img
                src={Logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <img
                src={Basket}
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="Basket"
            />
            </Navbar.Text>
            <Navbar.Text className='ms-4'>
            <img
                src={User}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="User img"
            />
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Nav;