import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import DropdownsAdmin from './DropdownAdmin'

import Logo from '../../assets/logo.svg'

function NavbarAdmin() {
    return (
        <Navbar>
        <Container>
            <Link to={'/transaction'}>
                <img
                    src={Logo}
                    width="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='ms-4'>
                <DropdownsAdmin/>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarAdmin;