import React, { Component } from 'react';
import { Form, Label, FormGroup, Input, Card, CardFooter, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import axios from 'axios';

class Tables extends Component {
  constructor() {
    super();
    this.state1 = {
      name:''
    }
    this.state = {
      schoollist: [],
    }
    

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    }
  

  componentDidMount() {
    fetch('http://localhost:3000/school/schoolname/list')
    .then(results => { 
      return results.json();
    }).then(data => {
      let schools = data.map((school) => {
        return (
          
            <tr key={school._id}>
              <td>{ school.name }</td>
              <td>
                <Button className="btn-twitter btn-brand icon mr-1 mb-1 btn btn-secondary"><i className="fa fa-edit"></i></Button>
                <Button className="btn-html5 btn-brand icon mr-1 mb-1 btn btn-secondary"><i className="fa fa-trash"></i></Button>
              </td>
            </tr>
            
        )
      })

      this.setState({ schools: schools });
      });
  }

  changeHandler(e) {
    console.log("sdf");
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state1);
    axios
    .post("http://localhost:3000/school/schoolname/input", this.state1)
    .then(result => console.log(result));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>School Name</th>
                    <th>Edit</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.schools }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="6">
          <Card>
            <Form onSubmit={this.submitHandler} className="form-horizontal">
              <CardHeader>
                Input <strong>Sizes</strong>
              </CardHeader>
              <CardBody>
                
                  <FormGroup row>
                    <Label sm="3" htmlFor="name">Input School Name</Label>
                    <Col sm="8">
                      <Input type="text" id="name" name="name" placeholder="Normal" onChange={this.changeHandler} required/>
                    </Col>
                  </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="md" color="primary"><i className="fa fa-dot-circle-o"></i> Save</Button>
                <Button type="reset" size="md" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Form>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;