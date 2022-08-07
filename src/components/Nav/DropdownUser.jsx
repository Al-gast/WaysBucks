import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { NavDropdown } from 'react-bootstrap'
import IconProfile from '../../assets/iconProfile.svg'
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
            <NavDropdown.Item>
                <img src={IconProfile} alt="icon profile" width='30px'/>
                <Link to={'/profile'} className='dropdownText'>Profile</Link>
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item onClick={handleLogout}>
                <img src={IconLogout} alt="icon logout" width='30px'/>
                <p to={'/logout'} className='dropdownText'>Logout</p>
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default Dropdowns;