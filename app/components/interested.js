import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Interested extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="wrapper">

                    <h3>Your interest has been notified to the owners. Someone will reach out to you shortly!</h3>

                    <div className="interested_wrapper">
                        <Button href="/">Home</Button>
                    </div>
                </div>

            </div>
        );
    }
}
