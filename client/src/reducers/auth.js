import { AUTH_USER, AUTH_ERROR } from "../actions/types";
import { initialState } from "./initialState";

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
