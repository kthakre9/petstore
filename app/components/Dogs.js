import React, { Component } from 'react';
import { Button, Thumbnail, Row, Grid, Col } from 'react-bootstrap';

export default class Dogs extends Component{

    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="">
                <Grid>
                    <Row>
                        <Col xs={8} md={6}>
                            <h2>Pet Detail</h2>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};
