import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdowns() {
    return (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/logout'}>Logout</Link>
        </Dropdown.Menu>
        </Dropdown>
    );
}

export default Dropdowns;