import React from "react";

export default React.createClass({
    render() {
        return (
            <div>
                <div className="section1">
                    <h2>Adopting the Perfect Pet for your family</h2>
                    <div className="wrapper">
                        <div className="container">
                            <img src="./images/dog.jpg" />
                            <h2>The Dog shop</h2>
                        </div>
                        <div className="container">
                            <img src="./images/dog.jpg" />
                            <h2>The Cat shop</h2>
                        </div>
                        <div className="container">
                            <img src="./images/dog.jpg" />
                            <h2>Rabbits</h2>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div>
                        <em>Pets have a way of finding the people who need them, and filling an emptiness we didn’t ever know we had.</em>
                        <p>–Thom Jones</p>
                    </div>
                </div>
                <div className="section3">
                    <div className="row">
                        <div className="col">
                            <img src="./images/dog.jpg" />
                        </div>
                        <div className="col">
                            <div className="adopt">
                                <h5>ADOPT YOUR NEW BEST FRIEND</h5>
                                <p>We strive to carry healthy, well-cared for pet animals.
                                    Our rescue partners hold adoption events at our store every weekend, and we have cats and small
                                    animals available 7 days a week</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="shop">
                                <h5>SHOP FOR YOUR PET'S NEEDS</h5>
                                <p>We specialize in pet nutrition and health, carrying only premium brands and healthy treats. We carry
                                    more than 25,000 discount pet supplies online for every pet in your home.</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./images/cat.jpg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="./images/dog.jpg" />
                        </div>
                        <div className="col">
                            <div className="savelives">
                                <h5>SAVE LIVES</h5>
                                <p>Hundreds of animals every year find their forever homes with us. At petstore animal
                                    rescue groups and potential adopters meet every day, and pet owners shop to find everything they need
                                    for their four-legged friends</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
