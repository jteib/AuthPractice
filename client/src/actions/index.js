import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

// export function signup_success(payload) {
//   return { type: AUTH_USER, payload };
// }

export const signup = (creds, callback) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:3090/signup", creds);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    // dispatch(signup_success(response.data.token));
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (creds, callback) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:3090/signin", creds);
    console.log(creds);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};
