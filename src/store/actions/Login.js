import { push } from "react-router-redux";
import { actionTypes } from "./actionTypes";
import { toastr } from "react-redux-toastr";
import axios from "axios";
export function login(data) {
  return dispatch => {
    dispatch(request({ data }));
    axios
      .post("http://183.182.84.84/restapi/wp-json/jwt-auth/v1/token", {
        username: data.email,
        password: data.password
      })
      .then(response => {
        if(response.status === 200) {
          const authData = {
            token: response.data.token
          };
          localStorage.setItem("user", JSON.stringify(authData));
          toastr.success("Success", "Successfully Login");
          dispatch(success(authData));
          dispatch(push("/dashboard"));
        }
      })
      .catch(error => {
        const errorData = error.response ? error.response.data : error;
        toastr.error("Error", errorData.message);
        dispatch(failure(errorData.message));
      });
  };
}

function request(user) {
  return { type: actionTypes.LOGIN_REQUEST, user };
}
function success(user) {
  return { type: actionTypes.LOGIN_SUCCESS, user };
}
function failure(error) {
  return { type: actionTypes.LOGIN_FAILURE, error };
}

export function logout() {
  localStorage.removeItem("user");
  return { type: actionTypes.LOGOUT };
}
