// import { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import DropdownsUser from './DropdownUser'

import Logo from '../../assets/logo.svg'
import Basket from '../../assets/basket.svg'

function NavbarUser({counter}) {
    console.log(counter);
    return (
        <Navbar>
        <Container>
            <Link to={'/'}>
                <img
                    src={Logo}
                    width="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <div className={
                counter === undefined
                ? 'd-none'
                : counter === 0
                ? 'd-none'
                : 'circle'
                }
                >
                {counter}
            </div>

                <Link to={'/cart'}>
                <img
                    src={Basket}
                    width="28"
                    className="d-inline-block align-top"
                    alt="Basket"
                />
                </Link>
            </Navbar.Text>
            <Navbar.Text className='ms-4'>
                <DropdownsUser/>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarUser;