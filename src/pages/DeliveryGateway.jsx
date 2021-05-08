import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Row, Form, Card, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddressService from "../service/AddressService";

class DeliveryGateway extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;
        this.assignTypeHandler = this.assignTypeHandler.bind();
        this.assignButtonValue = this.assignButtonValue.bind();
    }

    initialState = {
        add: [],
        type: '',
        orderCost: 1000.00,
        deliveryCost: 0.00,
        totalCost: 0.00,
        btnValue: '',
        checkBoxObj: {}
    }

    assignButtonValue = (event) => {
        this.setState({btnValue : event.target.value})
        console.log('Button Value' + this.state.btnValue);
    }
    // assignButtonValue = (i) => {
    //     this.setState({ checkBoxObj: this.state.checkBoxObj[i]})
    //     console.log('Button Value' + this.state.checkBoxObj[i]);
    // }

    assignTypeHandler = (event) => {
        this.setState({type: event.target.value})

        if (this.state.type === 'Cash on Delivery') {
            this.setState({deliveryCost: 250.00, totalCost: (this.state.orderCost + this.state.deliveryCost)});
        } else if (this.state.type === 'Card Payment'){
            this.setState({totalCost: this.state.orderCost, deliveryCost: 0.00});
        } else {
            this.setState({totalCost: this.state.orderCost, deliveryCost: 0.00});
        }
    }

    componentDidMount() {
        AddressService.getAddress(1).then((res) => {
            this.setState({add: res.data});
        });
    }

    // calculateTotalCost = () => {
    //     if (this.state.type === 'Cash on Delivery') {
    //         this.setState({orderCost: 1000});
    //         this.setState({deliveryCost: 250});
    //         this.setState({totalCost: this.state.orderCost + this.state.deliveryCost});
    //     }
    // }

    render() {
        return (
            <div>
                <Form>
                    <Card>
                        <Card.Body>
                            <h1>Delivery Gateway</h1><br/><br/>

                            <h4>Select a Address</h4>
                            <Form.Row>
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                    <th>User ID</th>
                                    <th>Destination</th>
                                    <th>Address</th>
                                    <th>Province</th>
                                    <th>District</th>
                                    <th>City</th>
                                    <th>Zip Code</th>
                                    <th>Phone No.</th>
                                    <th>Select</th>
                                    <th>Action</th>
                                    </thead>

                                    <tbody>
                                    {


                                        this.state.add.map(
                                            address =>
                                                <tr key={address.id}>
                                                    <td>{address.userid}</td>
                                                    <td>{address.title}</td>
                                                    <td>{address.addresss}</td>
                                                    <td>{address.province}</td>
                                                    <td>{address.district}</td>
                                                    <td>{address.city}</td>
                                                    <td>{address.zip}</td>
                                                    <td>{address.phone}</td>
                                                    <td><Button onClick={this.assignButtonValue.bind(this)}
                                                                variant="secondary">Select</Button></td>
                                                    {/*<td><input type="checkbox"*/}
                                                    {/*           checked = {this.state.checkBoxObj[address.id] || false}*/}
                                                    {/*           onChange={() => this.assignButtonValue(address.id)}/></td>*/}
                                                    <td>{'Action'}</td>
                                                </tr>
                                        )

                                    }
                                    </tbody>
                                </table>
                            </Form.Row>

                            <Form.Row>
                                <Link to="/delivery/address" className="btn btn-primary success">Add Address</Link>
                            </Form.Row>

                            <br/><br/>

                            <h4>Select Delivery Method</h4>
                            <Form.Row>
                                <Form.Group as={Col} controlId="PaymentType" xs={4}>
                                    <Form.Label>Payment Type</Form.Label>
                                    <Form.Control required as="select"
                                                  name={'type'}
                                                  value={this.state.type}
                                                  onChange={this.assignTypeHandler}>
                                        <option></option>
                                        <option>Card Payment</option>
                                        <option>Cash on Delivery</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <br/><br/>

                            <Table striped bordered hover>
                                <tbody>
                                <tr>
                                    <td><Form.Label>Order Price</Form.Label></td>
                                    <td>{this.state.orderCost}</td>
                                </tr>
                                <tr>
                                    <td><Form.Label>Delivery Price</Form.Label></td>
                                    <td>{this.state.deliveryCost}</td>
                                </tr>
                                <tr>
                                    <td><Form.Label>Total Price</Form.Label></td>
                                    <td>{this.state.totalCost}</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>

                        <Card.Footer>
                            <Row>
                                <Button className="btn btn-primary" variant="primary" type="submit">Checkout</Button>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Form>
            </div>
        );
    }
}

export default DeliveryGateway;