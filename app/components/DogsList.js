import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchApi }  from '../redux/actions';
import each from 'async/eachSeries';
import { Button, Thumbnail, Row, Grid, Col } from 'react-bootstrap';

class DogsList extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        var DogsList = [];
        each(this.props.api, function(pet, cb){
            DogsList.push(
                <Col xs={6} md={4}>
                    <Thumbnail src="/images/dog.jpg" alt="242x200">
                        <h3><Link to={"/pets/"+pet.id} key={pet.id}>{pet.name}</Link></h3>
                        <p>{pet.breed} {pet.gender}</p>
                        <p>{pet.description}</p>
                    </Thumbnail>
                </Col>
            );
            cb();
        });

        return (
            <div className="lists">
                <h1>Dogs</h1>
                <Grid>
                    <Row>
                        {DogsList}
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        api: state.api
    };
};


export default connect(mapStateToProps)(DogsList);
