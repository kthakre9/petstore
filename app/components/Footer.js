import React, { Component } from "react";

export default class Footer extends Component{
    render() {
        return (
            <div className="footer">
                <ul>
                    <li>Contact</li>
                    <li>FAQs</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
                <p>&copy; 2016 Petstore. All Rights Reserved.</p>
            </div>
        );
    }
}
