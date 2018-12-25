import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Button } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import './Table.css';
import axios from 'axios';
import { Redirect, Route, Switch } from 'react-router-dom';

class Tables extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      schoolcosts: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/school/list')
    .then(results => { 
      return results.json();
    }).then(data => {
      let costs = data.map((cost) => {
        return (
            
            <tr key={cost._id}>
              <td>{ cost.schoolname }</td>
              <td>{ cost.year }</td>
              <td>{ cost.month }</td>
              <td>{ cost.week }</td>
              <td>{ cost.eeuro }</td>
              <td>{ cost.ekhw }</td>
              <td>{ cost.heuro }</td>
              <td>{ cost.hkhw }</td>
              <td>{ cost.weuro }</td>
              <td>{ cost.wkhw }</td>
              <td id="action">
                <Button className="btn-twitter btn-brand icon mr-1 mb-1 btn btn-secondary"><i className="fa fa-edit"></i></Button>
                <Button className="btn-html5 btn-brand icon mr-1 mb-1 btn btn-secondary" onClick={
                                            this.delHandler(cost._id)
                                        }><i className="fa fa-trash"></i></Button>
                                        
              </td>
            </tr>
            
        )
      })
      //console.log("-------------------------componentDidMount");
      this.setState({ schoolcosts: costs });
      });
  }

  delHandler(id) {
    console.log(id);
    axios.delete("http://localhost:3000/school/"+id)
         .then(result => console.log(result));
  }

  render() {


    return (
      <Router>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="1"></Col>
          <Col xs="12" lg="10">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Data Table
                <a href="/#/base/forms" className="btn btn-primary btn-md active pull-right" id="btn_add" role="button" aria-pressed="true">
                    <i className="fa fa-plus"></i>
                    <span>Add</span>
                </a>
              </CardHeader>
              <CardBody className="center">
                
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th rowSpan="2"><h3>School Name</h3></th>
                    <th colSpan="3">Date</th>
                    <th colSpan="2">Electricity</th>
                    <th colSpan="2">Heating</th>
                    <th colSpan="2">Water</th>
                    <th rowSpan="2" width="30px">Action</th>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Week</th>
                    <th><i className="fa fa-eur"></i></th>
                    <th>kwh</th>
                    <th><i className="fa fa-eur"></i></th>
                    <th>kwh</th>
                    <th><i className="fa fa-eur"></i></th>
                    <th>litre</th>
                    {/* <th>Edit</th>
                    <th>Delete</th> */}
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.schoolcosts }
                  
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="1"></Col>
        </Row>
      </div>

      {/* <Route exact path="/Forms" component={Forms} /> */}

      </Router>
    );
  }
}

export default Tables;
