import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { toastr } from "react-redux-toastr";
import { getPosts } from "./BlogInfo";
export function deletePost(data) {
  return dispatch => {
    console.log(data)
    dispatch(request());
    const storageSession=JSON.parse(localStorage.getItem('user'));
    axios.defaults.headers.common[ 'Authorization' ] = 'Bearer '+storageSession.token;
    axios
      .delete("http://183.182.84.84/restapi/wp-json/wp/v2/posts/"+data)
      .then(response => {
        toastr.success("Success", "Data Deleted Successfuly");
        dispatch(getPosts());
      })
      .catch(error => {
        if (error.response && error.response.data.responseCode === 401) {
          localStorage.removeItem("user");
          dispatch(push("/"));
          return;
        }
       
        const errorData = error.response ? error.response.data : error;
        toastr.error("Error", errorData.message);
        dispatch(failure(errorData.message));
      });
  };
  function request() {
    return { type: actionTypes.UPDATEUSER_REQUEST };
  }
  function success(profile) {
    return { type: actionTypes.UPDATEUSER_SUCCESS, profile };
  }
  function failure(error) {
    return { type: actionTypes.UPDATEUSER_FAILURE, error };
  }
}
