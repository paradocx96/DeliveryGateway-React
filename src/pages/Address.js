import React from "react";
import {Button, Col, Row, Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Address() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h1>Add New Address</h1>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="FormAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formTitle">
                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={12}>
                                            Delivery Destination
                                        </Form.Label>

                                        <Col sm={5}>
                                            <Form.Check
                                                type="radio"
                                                label="Home"
                                                name="formHorizontalRadios"
                                                id="formTitleHome"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Office"
                                                name="formHorizontalRadios"
                                                id="formTitleOffice"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Other"
                                                name="formHorizontalRadios"
                                                id="formTitleOther"
                                            />
                                        </Col>

                                    </Form.Group>
                                </fieldset>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formProvince">
                                <Form.Label>Province</Form.Label>
                                <Form.Control as="select" defaultValue=" ">
                                    <option> </option>
                                    <option>Central</option>
                                    <option>Eastern</option>
                                    <option>North Central</option>
                                    <option>Northern</option>
                                    <option>North Western</option>
                                    <option>Sabaragamuwa</option>
                                    <option>Southern</option>
                                    <option>Uva</option>
                                    <option>Western</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formDistrict">
                                <Form.Label>District</Form.Label>
                                <Form.Control as="select" defaultValue=" ">
                                    <option> </option>
                                    <option>Ampara</option>
                                    <option>Anuradhapura</option>
                                    <option>Badulla</option>
                                    <option>Colombo</option>
                                    <option>Galle</option>
                                    <option>Gampaha</option>
                                    <option>Hambantota</option>
                                    <option>Jaffna</option>
                                    <option>Kalutara</option>
                                    <option>Kandy</option>
                                    <option>Kegalle</option>
                                    <option>Kilinochchi</option>
                                    <option>Kurunegala</option>
                                    <option>Mannar</option>
                                    <option>Matale</option>
                                    <option>Matara</option>
                                    <option>Moneragala</option>
                                    <option>Mullaitivu</option>
                                    <option>Nuwara Eliya</option>
                                    <option>Polonnaruwa</option>
                                    <option>Puttalam</option>
                                    <option>Ratnapura</option>
                                    <option>Trincomalee</option>
                                    <option>Vavuniya</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formPhone">
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="">
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Address;