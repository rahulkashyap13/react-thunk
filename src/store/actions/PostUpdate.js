import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { toastr } from "react-redux-toastr";

export function updatePost(data) {
  return dispatch => {
    dispatch(request());
    const storageSession=JSON.parse(localStorage.getItem('user'));
    axios.defaults.headers.common[ 'Authorization' ] = 'Bearer '+storageSession.token;
    axios
      .put("http://183.182.84.84/restapi/wp-json/wp/v2/posts/"+data.id, data
      )
      .then(response => {
        dispatch(success(response.data));
        toastr.success("Success", "Data Updated Successfuly");
        dispatch(push("/dashboard"));
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
    return { type: actionTypes.POST_UPDATE_REQUEST };
  }
  function success() {
    return { type: actionTypes.POST_UPDATE_SUCCESS };
  }
  function failure(error) {
    return { type: actionTypes.POST_UPDATE_FAILURE, error };
  }
}
