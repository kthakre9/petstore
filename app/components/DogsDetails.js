import React from "react";
import { connect } from "react-redux";
import { getPetbyId } from "../redux/actions";
import { Image, Button, Row, Grid, Col } from "react-bootstrap";

class DogsDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let petId = this.props.params.id;
        this.props.getPetbyId(petId);
    }

    render() {
        return (
            <div className="petDetailPage">
                <Grid className="detailPage">
                    <Row>
                        <Col md={6} >
                            <Image src="/images/dog.jpg" alt="242x200" thumbnail />
                        </Col>
                        <Col md={6}>
                            <h1>{this.props.pets.name}</h1>
                            <p>{this.props.pets.breed}</p>
                            <p>{this.props.pets.gender}</p>
                            <p>{this.props.pets.dob}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="petDescription">
                            <h3>At a Glance</h3>
                            <p>{this.props.pets.description}</p>
                        </Col>
                        <Col md={6} className="petDescription">
                            <h3>Care <span className="imgRing"><img src="../images/food.svg" width={30} height={30}/></span></h3>
                            <p>{this.props.pets.care}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="petDescription">
                            <h3>Exercise <span className="imgRing"><img src="../images/health.png" width={30} height={30}/></span></h3>
                            <p>{this.props.pets.exercise}</p>
                        </Col>
                        <Col md={6} className="petDescription">
                            <h3>Grooming <span className="imgRing"><img src="../images/grooming.png" width={30} height={30}/></span></h3>
                            <p>{this.props.pets.grooming}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} mdOffset={4}>
                            <Button bsSize="large" href={this.props.isAuthenticated ? "#interested": "#login"}>I'm Interested!</Button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pets: state.pets,
        isAuthenticated: state.login.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        getPetbyId: petId => {
            dispatch(getPetbyId(petId));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DogsDetails);
