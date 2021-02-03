import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import UserList from "../users/UserList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col xs="2">
                <CategoryList>

                </CategoryList>
            </Col>
            <Col xs="10">
                <UserList>

                </UserList>
            </Col>
        </Row>
      </div>
    );
  }
}
