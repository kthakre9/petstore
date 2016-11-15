import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="section1">
                    <h3>Adopt the perfect pet </h3>
                    <div className="wrapper">
                        <div className="container">
                            <div className="top">
                                <img src="./images/dog.jpg" width={300} />
                            </div>
                            <div className="bottom">
                                <h2>Dogs</h2>
                            </div>
                        </div>
                        <div className="container"></div>
                        <div className="container"></div>
                    </div>
                </div>
                <div className="section2"></div>
                <div className="section3"></div>
            </div>
        )
    }
})