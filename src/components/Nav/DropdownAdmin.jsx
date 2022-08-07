import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import IconAddProduct from '../../assets/iconAddProduct.svg'
import IconAddToping from '../../assets/iconAddToping.svg'
import IconLogout from '../../assets/iconLogout.svg'

import User from '../../assets/user.svg'

function Dropdowns() {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)

    const handleLogout = () =>{
        dispatch({
            type: 'LOGOUT',
        })
        navigate('/')
    }
    return (
        <NavDropdown title={<img src={User} alt="user"  width="45"/>}>
            <NavDropdown.Item className='mb-1'>
                <img src={IconAddProduct} alt="icon profile" width='30px'/>
                <Link to={'/add-product'} className='dropdownText'>Add Product</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <img src={IconAddToping} alt="icon profile" width='30px'/>
                <Link to={'/add-toping'} className='dropdownText'>Add Toping</Link>
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item onClick={handleLogout}>
                <img src={IconLogout} alt="icon logout" width='30px'/>
                <p className='dropdownText'>Logout</p>
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default Dropdowns;