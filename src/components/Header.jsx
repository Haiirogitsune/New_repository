import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Navigation.scss';

import { Modal } from 'react-bootstrap'
import { useDispatch, /*useSelector*/ } from 'react-redux';

import { onLogin } from '../reducers/userReducer'

const Header = () => {
    const dispatch = useDispatch();
    /*const activeUser = useSelector((state) => state.user.activeUser);
    Active user: {activeUser?.name}*/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const login = () => {
        dispatch(onLogin({ name: 'user1' }));
        setShow(false);
    }

    return(
        <nav>
            <p>SajidStudio</p>
            <Link to="/">Home</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/type">Type of house</Link>
            <Link to="/contact">Contact</Link>
            <div><button onClick={handleShow}>Login</button></div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Authorization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='modal-input' type='text' placeholder='Login' autoComplete='of'></input>
                    <input className='modal-input' type='password' placeholder='Password'></input>
                </Modal.Body>
                <Modal.Footer>
                <button className='modal-button' variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button className='modal-button' variant="primary" onClick={login}>
                    Login
                </button>
                </Modal.Footer>
            </Modal>
        </nav>
    );
};

export default Header;