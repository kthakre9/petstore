import React from 'react'

export default React.createClass({
    render() {
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

        )
    }
})