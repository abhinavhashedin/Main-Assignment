import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <Navbar  className='navbar-color' expand="lg" bsPrefix='navbar' >
                <div className='navbar-container'>
                    <Navbar.Brand bsPrefix='brand-container'>Superhero Watch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className='brand-container'>Home</Link>
                        </Nav>
                    </Navbar.Collapse>
               </div>
            </Navbar>
        </>
    )
}

export default NavBar