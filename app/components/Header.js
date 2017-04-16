import React, { Component } from 'react';

export default class Header extends Component{
    render() {
        return (
                <ul>
                    <li>PetStore</li>
                    <span className="floatRight">
                        <li>Login</li>
                        <li>Register</li>
                    </span>
                </ul>
        );
    }
};
