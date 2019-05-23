import { push } from "react-router-redux";

export function RedirectTo(redirect) {
    return dispatch => {
        dispatch(push(redirect));
    }
}
