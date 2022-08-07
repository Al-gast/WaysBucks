// import { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
// import Dropdowns from './Dropdowns'

import Logo from '../../assets/logo.svg'
// import Basket from '../../assets/basket.svg'
import Login from '../auth/Login'
// import { useState } from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../../context/UserContext'

function NavbarHome({setLogin, setRegister}) {
// const  [state] = useContext(UserContext)
// const isLogin = state.isLogin
// const [Register, setRegister] = useState(false)
// const [Login, setLogin] = useState(false)
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
            <div className='btn-main'>
                {/* <button onClick={() => setLogin(true)} className='btnLogin'>Login</button>
                <button onClick={() => setRegister(true)} className='btnRegister'>Register</button> */}
                <Login />
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarHome;