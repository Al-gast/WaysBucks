import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Modal, Form} from 'react-bootstrap';
import { UserContext } from '../../context/UserContext';

function Login() {

  // switch
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const handleSwitchRegister = () =>{
    setShow(false)
    setShows(true)
  }
  const handleSwitchLogin = () =>{
    setShow(true)
    setShows(false)
  }
  // END Switch

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

  // Auth
  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    let status
    if (email === 'admin@mail.com') {
      status = 'admin'
      navigate('/transaction')
    }else{
      status = 'user'
      navigate('/')
    }

    const data = {
      email,
      password,
      status
    }

    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data
    })
    setShow(false)
  }


  return (
  <>
    <>
      <Button className='btnLogin text-danger' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <div className="header-login mb-4">
                <p className='mt-4 ms-3'>Login</p>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="email-input ms-3">
                <Form.Control
                    type="text"
                    id="emailInput"
                    name="email"
                    placeholder='Email'
                />
            </div>
            <div className="password-input ms-3 mt-3">
                <Form.Control
                    type="password"
                    id="passwordInput"
                    name="password"
                    placeholder='Password'
                />
            </div>
            <div className="btn-login ms-3">
                <button type='submit'>Login</button>
            </div>
          </form>
            <div className="footer mt-3">
                <p className='tx-modal'>
                    Don't have account ? Click <b onClick={handleSwitchRegister}>Here</b>
                </p>
            </div>
        </Modal.Body>
      </Modal>
    </>
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
                  Already have an account ? Click <b onClick={handleSwitchLogin}>Here</b>
              </p>
          </div>
      </Modal.Body>
    </Modal>
  </>
  </>
  );
}

export default Login;


















// import React from 'react'


    
//   export default function Login({ setLogin, setRegister }) {

//     return (
//       <div className='regAnimation'>
//         <button onClick={() => setLogin()} className='logModal'></button>
//         <div className='register'>
//           <h1 className='logTitle'>Register</h1>
//           <form>
//             <input type="text" placeholder="Email" />
//             <input type="text" placeholder="Password" />
//             <input type="text" placeholder="Full Name" />
//           </form>
//           <button className='logButton'>Login</button>
//           <p>
//             Already have an account? click <button onClick={() => setRegister(true)} className='chBtn'>here</button>
//           </p>
//         </div>
//       </div>
//     );
//   }