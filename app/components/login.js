import React, { Component } from 'react';
import {hashHistory} from "react-router";
import { connect } from 'react-redux';
import { fetchLogin } from '../redux/actions';

import { Button, ControlLabel, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            username: '',
            password: ''

        }
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    };

    login = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.fetchLogin(user);
        hashHistory.push('/');

    };

    render() {
        return(
        <div>
            <div className="wrapper">
                <FormGroup>
                    <InputGroup className="input_fields">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" name="username" onChange={this.handleChange} placeholder="Username" value={this.state.name}/>
                    </InputGroup>
                    <InputGroup className="input_fields">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </InputGroup>
                </FormGroup>

            <div className="footer_buttons">
                <Button className="cancel_button" href="/">Cancel</Button>
                <Button className="login_button" onClick={this.login}>Login</Button>
            </div>
            </div>

        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchLogin: user =>{
            dispatch(fetchLogin(user));
        }
    }
};


export default connect(mapDispatchToProps)(Login);
