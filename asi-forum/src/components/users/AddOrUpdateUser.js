import React, { useEffect, useState } from "react";
import {connect} from "react-redux";
import {getCategories} from "../../redux/actions/categoryActions";
import {saveUser} from "../../redux/actions/userActions";
import UserDetail from "./UserDetail";

function AddOrUpdateUser({
  users,
  categories,
  getUsers,
  getCategories,
  saveUser,
  history,
  ...props
}) {
  const [user, setUser] = useState({ ...props.user });
  const[errors, setErrors]=useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setUser({ ...props.user });
  }, [props.user]);
  function handleChange(event) {
    const { name, value } = event.target;
    setUser((previousUser) => ({
      ...previousUser,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }
  function handleSave(event) {
    event.preventDefault();
    saveUser(user).then(() => {
      history.push("/");
    });
  }
  return (
    <UserDetail
      user={user}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    ></UserDetail>
  );
}
export function getUserById(users, userId) {
  let user = users.find((user) => user.id == userId) || null;
  return user;
}
function mapStateToProps(state, ownProps) {
  const userId = ownProps.match.params.userId;
  const user =
    userId && state.userListReducer.length > 0
      ? getUserById(state.userListReducer, userId)
      : {};
  return {
    user,
    users: state.userListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  getCategories,
  saveUser
};
export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateUser);
