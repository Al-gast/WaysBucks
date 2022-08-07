import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Modal, Form} from 'react-bootstrap';
import Login from './Login';

function Register() {
  const [shows, setShows] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <Button className='btnRegister text-white' onClick={handleShows}>
        Register
      </Button>

      <Modal show={shows} onHide={handleCloses}>
        <Modal.Body>
            <div className="header-login mb-4">
                <p className='mt-4 ms-3'>Register</p>
            </div>
            <div className="email-input ms-3">
                <Form.Control
                    type="text"
                    id="emailInput"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    placeholder='Email'
                />
            </div>
            <div className="password-input ms-3 mt-3">
                <Form.Control
                    type="password"
                    id="passwordInput"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    placeholder='Password'
                />
            </div>
            <div className="fullname-input ms-3 mt-3">
                <Form.Control
                    type="text"
                    id="fullnameInput"
                    name="fullname"
                    onChange={handleChange}
                    value={name}
                    placeholder='Full Name'
                />
            </div>
            <div className="btn-login ms-3">
                <button type='submit'>Register</button>
            </div>
            <div className="footer mt-3">
                <p className='tx-modal'>
                    Already have an account ? Click <b>Here</b>
                </p>
            </div>
        </Modal.Body>
        <Login className='d-none' shows={shows} setShows={setShows}/>
      </Modal>
    </>
  );
}

export default Register;






// import React from 'react'


    
//   export default function Register({ setLogin, setRegister }) {

//     return (
//       <div className='regAnimation'>
//         <button onClick={() => setRegister()} className='logModal'></button>
//         <div className='register'>
//           <h1 className='logTitle'>Register</h1>
//           <form>
//             <input type="text" placeholder="Email" />
//             <input type="text" placeholder="Password" />
//             <input type="text" placeholder="Full Name" />
//           </form>
//           <button className='logButton'>Login</button>
//           <p>
//             Already have an account? click <button onClick={() => {setRegister && setRegister(false)}} className='chBtn'>here</button>
//           </p>
//         </div>
//       </div>
//     );
//   }