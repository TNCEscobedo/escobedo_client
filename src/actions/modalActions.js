import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_RESPONSE,
  MODAL_COMPONENT,
  SHOW_ALERT,
  SHOW_SUCCESS,
  CLEAR_MODAL,
  CLEAR_SUCCESS,
  CLEAR_ALERT
} from "./types";

export const confirm = (content, callback) => dispatch => {
  dispatch({ type: SHOW_MODAL, payload: { content, callback } });
};

export const alert = content => dispatch => {
  dispatch({ type: SHOW_ALERT, payload: content });
  window.setTimeout(() => dispatch({ type: CLEAR_ALERT }), 5000);
};

export const success = content => dispatch => {
  dispatch({ type: SHOW_SUCCESS, payload: content });
};

export const hideAlert = () => dispatch => {
  dispatch({ type: CLEAR_ALERT });
};

export const modalComponent = (
  title,
  component,
  onClose,
  callback
) => dispatch => {
  dispatch({
    type: MODAL_COMPONENT,
    payload: { title, component, onClose, callback }
  });
};

export const setResponse = response => dispatch => {
  dispatch({ type: SET_RESPONSE, payload: response });
  dispatch({ type: HIDE_MODAL });
};

export const clear = () => dispatch => {
  dispatch({ type: CLEAR_MODAL });
};

export const clearModal = () => dispatch => {
  dispatch({ type: CLEAR_MODAL });
};

export const clearSuccess = () => dispatch => {
  dispatch({ type: CLEAR_SUCCESS });
};

export const clearAlert = () => dispatch => {
  dispatch({ type: CLEAR_ALERT });
};
