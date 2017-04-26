import React, { Component } from 'react';

import { Button, Modal, Row, Grid, Col, FormGroup, InputGroup, Glyphicon, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class LoginModal extends React.Component {

    render() {
        return(
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    One fine body...
                </Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>
        )
    }
}
