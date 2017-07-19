import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions';
import {hashHistory} from "react-router";

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component{
    constructor(props) {
        super(props);
    }

    logout = ()=>{
        this.props.logoutUser();
        hashHistory.push('/')
    };

    render() {
        const { isAuthenticated } = this.props;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">PetStore</a>
                    </Navbar.Brand>
                </Navbar.Header>


                    {isAuthenticated ?
                        <Nav pullRight className="navbar_links">
                            <NavItem eventKey={1} href="/">Home</NavItem>
                            <NavItem eventKey={2} onClick={this.logout} >Logout</NavItem>
                        </Nav>
                        :
                        <Nav pullRight className="navbar_links">
                            <NavItem eventKey={1} href="#login">Login</NavItem>
                        </Nav>
                    }
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.isAuthenticated
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: user =>{
            dispatch(logoutUser(user));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
