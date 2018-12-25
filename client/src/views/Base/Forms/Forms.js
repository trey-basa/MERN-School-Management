import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';

class Forms extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      schoolname:'Russia',
      year:'2017',
      month:'1',
      week:'1',
      eeuro:'',
      ekhw:'',
      heuro:'',
      hkhw:'',
      weuro:'',
      wkhw:'',
    };

    this.state1 = {
      schoollist: [],
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    // this.state = {
    //   collapse: true,
    //   fadeIn: true,
    //   timeout: 300
    // };
  }

  componentDidMount() {
    console.log("asdf");
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    axios
    .post("http://localhost:3000/school/input", this.state)
    .then(<Redirect from="/" to="/dashboard" />);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="2"></Col>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Input Data</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.submitHandler} className="form-horizontal">
                <Row>
                    <Col xs="12" sm="3"></Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="schoolname">School Name</Label>
                        <Input type="select" name="schoolname" id="schoolname" onChange={this.changeHandler}>
                          {/* { this.state1.schoollist } */}
                          <option value="Russia">Russia</option>
                          <option value="China">China</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="12" sm="3"></Col>
                </Row>
                <Row>
                  <Col xs="12" sm="3"></Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="year">Year</Label>
                      <Input type="select" name="year" id="year" onChange={this.changeHandler}>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="month">Month</Label>
                      <Input type="select" name="month" id="month" onChange={this.changeHandler}>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="2">
                    <FormGroup>
                      <Label htmlFor="week">Week</Label>
                      <Input type="select" name="week" id="week" onChange={this.changeHandler}>
                        <option >1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="3"></Col>
                </Row>
                <Row>
                  <Col xs="12" sm="3"></Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="eeuro">Electricity</Label>
                      <Input type="text" id="eeuro" name="eeuro" placeholder="$0.00($)" onChange={this.changeHandler} required />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="ekhw">Electricity</Label>
                      <Input type="text" id="ekhw" name="ekhw" placeholder="0.00(khw)" onChange={this.changeHandler} required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="3"></Col>
                </Row>
                <Row>
                  <Col xs="12" sm="3"></Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="heuro">Heating</Label>
                      <Input type="text" id="heuro" name="heuro" placeholder="$0.00($)" onChange={this.changeHandler} required />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="hkhw">Heating</Label>
                      <Input type="text" id="hkhw" name="hkhw" placeholder="0.00(khw)" onChange={this.changeHandler} required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="3"></Col>
                </Row>
                <Row>
                  <Col xs="12" sm="3"></Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="weuro">Water</Label>
                      <Input type="text" id="weuro" name="weuro" placeholder="$0.00($)" onChange={this.changeHandler} required />
                    </FormGroup>
                  </Col>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="wkhw">Water</Label>
                      <Input type="text" id="wkhw" name="wkhw" placeholder="0.00(khw)" onChange={this.changeHandler} required />
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="3"></Col>

                </Row>
                <Row>
                <Col xs="12" sm="5"></Col>

                  <Col xs="1">
                    <FormGroup>
                        <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </FormGroup>
                    
                  </Col>
                  <Col xs="1">
                    <FormGroup>
                        <button type="Reset" className="btn btn-primary btn-block">Reset</button>
                    </FormGroup>
                  </Col>
                  <Col xs="12" sm="5"></Col>

                </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="2"></Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
