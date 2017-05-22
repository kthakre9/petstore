import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import each from 'async/eachSeries';
import filter from 'async/filter';
import { Table, Thumbnail, Row, Grid, Col, FormGroup, InputGroup, Glyphicon, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

// import { connect } from 'react-redux';
import { fetchPets }  from '../redux/actions';

class DogsList extends React.Component{
    constructor(props){
        super(props);

        props.requestPets();
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

    onSearch = (evt, props=this.props) => {
        console.log('here on ', evt.target.value);
        if (evt.target.value === '') {
            this.setState({
                searchTerm: '',
                searchFilter: 'SHOW_ALL'
            });
        } else {
            this.setState({
                searchTerm: evt.target.value,
                searchFilter: 'SHOW_SEARCH'
            });
        }

        // if (this.state.searchFilter === 'SHOW_SEARCH') {
            let searchTerm = evt.target.value;

            let filteredGroups = {...this.props.pets};


            filter(filteredGroups, function (value, callback) {
                console.log(value.name, searchTerm, value.name.indexOf(searchTerm));
                callback(null, value.name.indexOf(searchTerm) !== -1);
            }, function(err, results){
                console.log(results);
        })

            // console.log(filtered);

            // this.setState({
            //     filteredLogs: filtered
            // });

        // }
    }



    render() {
        var DogsList = [];
        if (!this.state.listView){
            each(this.props.pets, function(pet, cb){
                DogsList.push(
                    <Col xs={6} md={4} key={pet.id}>
                        <Thumbnail src="/images/dog.jpg" alt="242x200"  >
                            <h3><Link to={"/pets/"+pet.id} >{pet.name}</Link></h3>
                            <p>{pet.breed} {pet.gender}</p>
                            <p>{pet.description}</p>
                        </Thumbnail>
                    </Col>
                );
                cb();
            });
        } else {
            each(this.props.pets, function(pet, cb) {
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
                        {this.state.searchFilter === 'SHOW_SEARCH' ? this.state.filteredLogs : DogsList}
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pets: state.pets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPets: () => {
            dispatch(fetchPets());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DogsList);
