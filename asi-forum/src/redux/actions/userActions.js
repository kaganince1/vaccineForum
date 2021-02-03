import * as actionTypes from "./actionTypes";

export function getUsersSuccess(Users) {
  return { type: actionTypes.GET_USERS_SUCCESS, payload: Users };
}
export function createUserSuccess(user) {
  return { type: actionTypes.CREATE_USER_SUCCESS, payload: user };
}
export function updateUserSuccess(user) {
  return { type: actionTypes.UPDATE_USER_SUCCESS, payload: user };
}
export function saveUserApi(user) {
  return fetch("http://localhost:3000/users/" + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}
export function saveUser(user) {
  return function (dispatch) {
    return saveUserApi(user)
      .then((savedProduct) => {
        user.id
          ? dispatch(updateUserSuccess(savedProduct))
          : dispatch(createUserSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}
export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}
export function handleError(error) {
  console.error("Bir hata olustu.");
  throw error;
}
export function getUsers(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/users";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getUsersSuccess(result)));
  };
}
