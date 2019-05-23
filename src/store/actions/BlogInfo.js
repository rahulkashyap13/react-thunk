import axios from 'axios';
import { actionTypes } from './actionTypes';
import { push } from 'react-router-redux';
import { AppConfig } from '../../constant/AppConfig';
export function getPosts(data) {
  return (dispatch, getState) => {
    const stateData = getState().PostReducer;
    dispatch(request());
    axios
      .get("http://183.182.84.84/restapi/wp-json/wp/v2/posts")
      .then(response => {
        dispatch(success(response));
      })
      .catch(error => {
        if (error.response && error.response.data.responseCode === 401) {
          localStorage.removeItem("user");
          dispatch(push("/login"));
          return;
        }
        const errorData = error.response ? error.response.data : error;
        dispatch(failure(errorData.message, false));
      });
  };
  function request() {
    return { type: actionTypes.BLOGINFO_REQUEST };
  }
  function success(postInfo) {
    return { type: actionTypes.BLOGINFO_SUCCESS, postInfo};
  }
  function failure(error) {
    return { type: actionTypes.BLOGINFO_FAILURE, error };
  }
}
