import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'
import IconProfile from '../../assets/iconProfile.svg'
import IconLogout from '../../assets/iconLogout.svg'

import User from '../../assets/user.svg'

function Dropdowns() {
    return (
        <NavDropdown title={<img src={User} alt="user"  width="45"/>}>
            <NavDropdown.Item>
                <img src={IconProfile} alt="icon profile" width='30px'/>
                <Link to={'/profile'} className='dropdownText'>Profile</Link>
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