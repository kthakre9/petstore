import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions";

class LogoutModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { logoutUser } = this.props;
        return (
            <button onClick={() => logoutUser()} className="btn btn-primary">
                Logout
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logoutUser: user =>{
            dispatch(logoutUser(user));
        }
    };
};


export default connect(mapDispatchToProps)(LogoutModal);
