import React, { useState } from "react";
import TextInput from "../common/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";
import PassInput from "../common/PassInput";

const Signup = ({ history }) => {
  const dispatch = useDispatch();
  const redux = useSelector(state => {
    return {
      creds: state.auth.creds,
      errorMessage: state.auth.errorMessage
    };
  });

  const [creds, setCreds] = useState({ ...redux.creds });

  function onSubmit(event) {
    event.preventDefault();
    dispatch(
      signup(creds, () => {
        history.push("/feature");
      })
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setCreds(prevCreds => ({
      ...prevCreds,
      [name]: value
    }));
  }

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        name="email"
        type="text"
        label="Email"
        value={creds.email}
        onChange={handleChange}
      />
      <PassInput
        name="password"
        type="password"
        label="Password"
        value={creds.password}
        onChange={handleChange}
      />
      {/* <div>{this.props.errorMessage}</div> */}
      <button>Sign Up!</button>
    </form>
  );
};

export default Signup;
