import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import IconAddProduct from '../../assets/iconAddProduct.svg'
import IconAddToping from '../../assets/iconAddToping.svg'
import IconLogout from '../../assets/iconLogout.svg'

import User from '../../assets/user.svg'

function Dropdowns() {
    return (
        <NavDropdown title={<img src={User} alt="user"  width="45"/>}>
            <NavDropdown.Item className='mb-1'>
                <img src={IconAddProduct} alt="icon profile" width='30px'/>
                <Link to={'/profile'} className='dropdownText'>Add Product</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <img src={IconAddToping} alt="icon profile" width='30px'/>
                <Link to={'/profile'} className='dropdownText'>Add Toping</Link>
            </NavDropdown.Item>
            <hr />
            <NavDropdown.Item>
                <img src={IconLogout} alt="icon logout" width='30px'/>
                <Link to={'/logout'} className='dropdownText'>Logout</Link>
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default Dropdowns;