import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import each from 'async/eachSeries';
import { Table, Thumbnail, Row, Grid, Col, FormGroup, InputGroup, Glyphicon, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

class DogsList extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            listView: false,
            searchFilter: 'SHOW_ALL',
            searchTerm: ''
        }
    }

    showListView = () => {
        this.setState({
            listView: true
        })
    };

    showGridView = () =>{
        this.setState({
            listView: false
        })
    }



    render() {
        console.log(this.state);
        var DogsList = [];
        if (!this.state.listView){
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
        } else {
            each(this.props.api, function(pet, cb) {
                DogsList.push(
                    <Col xs={6} md={12}>
                        <ListGroup>
                            <ListGroupItem>
                                <Table>
                                    <tbody>
                                    <tr>
                                        <td>{pet.name}</td>
                                        <td>{pet.breed}</td>
                                        <td>{pet.gender}</td>
                                        <td><p>{pet.description}</p></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                );
                cb();
            });
        }


        return (
            <div className="lists">
                <h1>Dogs</h1>
                <Grid>
                    <Row>
                        <Col xs={6} md={12}>
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Search" onKeyUp={this.onSearch}/>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="align-justify" onClick={this.showListView}/>
                                    </InputGroup.Addon>
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="th-large" onClick={this.showGridView}/>
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
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
