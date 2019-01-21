import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return(
           <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Company Name</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                 <NavItem eventKey={1} componentclass={Link} href="/" to="/">
                 Home
                 </NavItem>
                 <NavItem eventKey={2} componentclass={Link} href="/about" to="/about">
                 About
                 </NavItem>
                 <NavItem eventKey={3} componentclass={Link} href="/news" to="/news">
                 News
                 </NavItem>
                 <NavItem eventKey={4} componentclass={Link} href="/table" to="/table">
                 Table
                 </NavItem>
                 <NavItem eventKey={5} componentClass={Link} href="/login" to="/login">
                 Login
                 </NavItem>
                </Nav>
            </Navbar.Collapse>
           </Navbar> 
        )
    }
}