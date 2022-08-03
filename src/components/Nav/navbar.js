// import { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Dropdowns from './dropdowns'

import Logo from '../../assets/logo.svg'
import Basket from '../../assets/basket.svg'

function Nav() {
    return (
        <Navbar>
        <Container>
            <Link to={'/'}>
                <img
                    src={Logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Link>
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
            <Navbar.Text className='ms-4'><Dropdowns/></Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Nav;