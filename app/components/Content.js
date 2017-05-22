import React, { Component } from 'react';
import { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPets }  from '../redux/actions';

import { Grid, Row, Col } from 'react-bootstrap';

class Content extends Component{
    constructor(props){
        super(props);
        props.requestPets();
    }

    render() {
        return (
            <div>
                <div className="section1">
                    <h2>Adopting the Perfect Pet for your family</h2>
                    <div className="wrapper">
                        <div className="row">
                            <div className="column">
                                <img src="./images/dog.jpg" />
                                <h2><Link to="/pets"> Dog shop <span>
                                    <svg fill="#fd6b54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                        <path d="M0-.25h24v24H0z" fill="none"/>
                                    </svg>
                                </span></Link></h2>
                            </div>
                            <div className="column">
                                <img src="./images/cat.jpg" />
                                <h2><a href="#dogs">Cat shop <span>
                                    <svg fill="#fd6b54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                        <path d="M0-.25h24v24H0z" fill="none"/>
                                    </svg>
                                </span></a>
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column_small">
                                <img src="./images/cat.jpg" />
                                <h2><a href="#">Bird shop
                                <span>
                                    <svg fill="#fd6b54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                        <path d="M0-.25h24v24H0z" fill="none"/>
                                    </svg>
                                </span></a>
                                </h2>
                            </div>
                            <div className="column_small">
                                <img src="./images/cat.jpg" />
                                <h2><a href="#">Reptile shop <span>
                                    <svg fill="#fd6b54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                        <path d="M0-.25h24v24H0z" fill="none"/>
                                    </svg>
                                </span></a></h2>
                            </div>
                            <div className="column_small">
                                <img src="./images/cat.jpg" />
                                <h2><a href="#">Fish shop <span>
                                    <svg fill="#fd6b54" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                                        <path d="M0-.25h24v24H0z" fill="none"/>
                                    </svg>
                                </span></a></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <Grid className="section2">
                    <Row>
                        <Col xs={18} md={12}>
                            <em>Pets have a way of finding the people who need them, and filling an emptiness we didn’t ever know we had.</em>
                            <p>–Thom Jones</p>
                        </Col>
                    </Row>
                </Grid>

                <div className="section3">
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} >
                                <img src="./images/dog.jpg" />
                            </Col>
                            <Col md={6}>
                                <div className="adopt">
                                    <h5>ADOPT YOUR NEW BEST FRIEND</h5>
                                    <p>We strive to carry healthy, well-cared for pet animals.
                                        Our rescue partners hold adoption events at our store every weekend, and we have cats and small
                                        animals available 7 days a week</p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6}>
                                <div className="shop">
                                    <h5>SHOP FOR YOUR PETS NEEDS</h5>
                                    <p>We specialize in pet nutrition and health, carrying only premium brands and healthy treats. We carry
                                        more than 25,000 discount pet supplies online for every pet in your home.</p>
                                </div>
                            </Col>
                            <Col md={6} >
                                <img src="./images/cat.jpg" />
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={6} >
                                <img src="./images/dog.jpg" />
                            </Col>
                            <Col md={6}>
                                <div className="savelives">
                                    <h5>SAVE LIVES</h5>
                                    <p>Hundreds of animals every year find their forever homes with us. At petstore animal
                                        rescue groups and potential adopters meet every day, and pet owners shop to find everything they need
                                        for their four-legged friends</p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        pets: Object.assign({}, state.pets)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPets: () => {
            dispatch(fetchPets());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
