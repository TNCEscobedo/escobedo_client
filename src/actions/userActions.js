import api from "./api";
import AuthService from "../services/AuthService";
import { SHOW_ALERT, CLEAR_ALERT } from "./types";

export const signIn = (user, email) => dispatch => {
  AuthService.signIn(user, email)
    .then(user => {
      AuthService.getToken()
        .then(token => {
          api.defaults.headers["Authorization"] = token;
          dispatch({ type: "LOGIN", payload: user });
        })
        .catch(error => {
          if (error.response) console.log(error.response);
          else console.log(error);
          dispatch({
            type: SHOW_ALERT,
            payload: "Hubo un error al autenticar su usuario. "
          });
          setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
        });
    })
    .catch(error => {
      if (error.response) console.log(error.response);
      else console.log(error);
      dispatch({
        type: SHOW_ALERT,
        payload: "Hubo un error al autenticar su usuario. "
      });
      setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
    });
};

export const userLoggedIn = () => dispatch => {
  AuthService.userLoggedIn()
    .then(user => {
      if (user) {
        AuthService.getToken()
          .then(token => {
            api.defaults.headers["Authorization"] = token;
            dispatch({ type: "LOGIN", payload: user });
          })
          .catch(error => {
            if (error.response) console.log(error.response);
            else console.log(error);
            dispatch({
              type: SHOW_ALERT,
              payload: "Hubo un error al autenticar su usuario. "
            });
            setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
          });
      } else dispatch({ type: "LOGOUT" });
    })
    .catch(error => {
      if (error.response) console.log(error.response);
      else console.log(error);
      dispatch({
        type: SHOW_ALERT,
        payload: "Hubo un error al autenticar su usuario. "
      });
      setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
    });
};

export const signOut = () => dispatch => {
  AuthService.signOut()
    .then(() => {
        dispatch({ type: "LOGOUT" });
    })
    .catch(error => {
        if(error.response) console.log(error.response);
        else console.log(error)
        dispatch({ type: SHOW_ALERT, payload: "Hubo un error al autenticar su usuario. "});
        setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
    });
};
