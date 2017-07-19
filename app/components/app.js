import React, { Component } from "react";

export default class App extends Component{
    render(props) {
        const { Header, content, Footer } = this.props;
        return (
            <div>
                <div className="Header">
                    {Header}
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="Footer">
                    {Footer}
                </div>
            </div>

        );
    }
}
