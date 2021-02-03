import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import {Link} from "react-router-dom"

class UserList extends Component {
  componentDidMount() {
    this.props.actions.getUsers();
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">KULLANICI YORUMLARI</Badge> -{" "}
          <Badge color="primary">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>İsim</th>
              <th>Yorum</th>
              <th>Yan Etkiler</th>
              <th>Puan</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td><Link to={"/saveuser/" + user.id}>{user.userName}</Link></td>
                <td>{user.userComment}</td>
                <td>{user.userEffects}</td>
                <td>{user.point}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    users: state.userListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUsers: bindActionCreators(userActions.getUsers, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
