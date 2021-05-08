import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddressService from '../service/AddressService';


class Address extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState;
        this.submitAddresss = this.submitAddresss.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.assignAddressHandler = this.assignAddressHandler.bind();
        this.assignProvinceHandler = this.assignProvinceHandler.bind();
        this.assignDistrictHandler = this.assignDistrictHandler.bind();
        this.assignCityHandler = this.assignCityHandler.bind();
        this.assignZipHandler = this.assignZipHandler.bind();
        this.assignPhoneHandler = this.assignPhoneHandler.bind();
        this.assignTitleHandler = this.assignTitleHandler.bind();
    }

    initialState = {
        userid: '',
        title: '',
        addresss: '',
        province: '',
        district: '',
        city: '',
        zip: '',
        phone: ''
    }

    assignAddressHandler = (event) => {
        this.setState({addresss : event.target.value})
    }
    assignProvinceHandler = (event) => {
        this.setState({province : event.target.value})
    }
    assignDistrictHandler = (event) => {
        this.setState({district : event.target.value})
    }
    assignCityHandler = (event) => {
        this.setState({city : event.target.value})
    }
    assignZipHandler = (event) => {
        this.setState({zip : event.target.value})
    }
    assignPhoneHandler = (event) => {
        this.setState({phone : event.target.value})
    }
    assignTitleHandler = (event) => {
        this.setState({title : event.target.value})
    }

    // Reset Form Values
    resetForm = () => {
        this.setState(() => this.initialState)
    }

    submitAddresss = (e) => {
        e.preventDefault();

        if(this.state.title == null && this.state.addresss == null) {
            alert("Fill All Data!!!");
        } else {
            let formAddress = {
                userid: '1',
                title: this.state.title,
                addresss: this.state.addresss,
                province: this.state.province,
                district: this.state.district,
                city: this.state.city,
                zip: this.state.zip,
                phone: this.state.phone
            }
            console.log('Address => ' + JSON.stringify(formAddress));
            AddressService.postAddress(formAddress)
                .catch(function (error) {
                    console.log(error);
                }).then(res => {
                this.props.history.push('/delivery');
            });
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <h1>Add New Address</h1>
                        <Form id={'addNewBrandForm'}
                              onSubmit={this.submitAddresss.bind(this)}
                              onReset={this.resetForm.bind(this)}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="FormAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control required as="textarea"
                                                  rows={3}
                                                  name={'addresss'}
                                                  value={this.state.addresss}
                                                  onChange={this.assignAddressHandler}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formProvince">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control required as="select"
                                                  name={'province'}
                                                  value={this.state.province}
                                                  onChange={this.assignProvinceHandler}>
                                        <option></option>
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
                                    <Form.Control required as="select"
                                                  name={'district'}
                                                  value={this.state.district}
                                                  onChange={this.assignDistrictHandler}>
                                        <option></option>
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
                                    <Form.Control required name={'city'}
                                                  value={this.state.city}
                                                  onChange={this.assignCityHandler}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control required name={'zip'}
                                                  value={this.state.zip}
                                                  onChange={this.assignZipHandler}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control required name={'phone'}
                                                  value={this.state.phone}
                                                  onChange={this.assignPhoneHandler}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formTitle">
                                    <Form.Label>Delivery Destination</Form.Label>
                                    <Form.Control required as="select"
                                                  name={'title'}
                                                  value={this.state.title}
                                                  onChange={this.assignTitleHandler}>
                                        <option></option>
                                        <option>Home</option>
                                        <option>Office</option>
                                        <option>Other</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <div>
                                <Button type={'submit'} className={'btn btn-primary'}>Save</Button>{'\u00A0'}
                                <Button type={'reset'} className={'btn btn-warning'}>Reset</Button>{'\u00A0'}
                                <Link to="/delivery" className="btn btn-primary">Cancel</Link>
                            </div>
                            {/*<Form.Row>*/}
                            {/*    <Form.Group as={Col}>*/}
                            {/*        */}
                            {/*    </Form.Group>*/}
                            {/*    <Form.Group as={Col}>*/}
                            {/*        */}
                            {/*    </Form.Group>*/}
                            {/*    <Form.Group as={Col}>*/}
                            {/*        */}
                            {/*    </Form.Group>*/}
                            {/*</Form.Row>*/}
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Address;