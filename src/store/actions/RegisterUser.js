import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { toastr } from "react-redux-toastr";

export function registerUser(data) {
  return dispatch => {
    dispatch(request());
    data.role = "author";
    axios
      .post("http://183.182.84.84/restapi/wp-json/wp/v2/users/register", data
      )
      .then(response => {
        dispatch(success(response.data));
        toastr.success("Success", "User Created Successfuly");
        dispatch(push("/login"));
      })
      .catch(error => {
        if (error.response && error.response.data.responseCode === 401) {
          localStorage.removeItem("user");
          dispatch(push("/"));
          return;
        }
       
        const errorData = error.response ? error.response.data : error;
        toastr.error("Success", errorData.message);
        dispatch(failure(errorData.message));
      });
  };
  function request() {
    return { type: actionTypes.USER_CREATE_REQUEST };
  }
  function success() {
    return { type: actionTypes.USER_CREATE_SUCCESS };
  }
  function failure(error) {
    return { type: actionTypes.USER_CREATE_FAILURE };
  }
}
