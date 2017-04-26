import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component{
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">PetStore</a>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav pullRight className="navbar_links">
                    <NavItem eventKey={1} href="#login">Login</NavItem>
                    <NavItem eventKey={2} href="#">Register</NavItem>
                </Nav>
            </Navbar>
        );
    }
};
