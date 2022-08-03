import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import User from '../../assets/user.svg'

function Dropdowns() {
    return (
        <NavDropdown title={<img src={User} alt="user"  width="40" height="40"/>}>            
            <NavDropdown.Item>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/logout'}>Logout</Link>
            </NavDropdown.Item>
        </NavDropdown>
    );
}

export default Dropdowns;