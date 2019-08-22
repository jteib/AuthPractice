import React, { useState } from "react";
import TextInput from "../common/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../actions";

const Signin = ({ history }) => {
  const dispatch = useDispatch();
  const redux = useSelector(state => {
    return {
      creds: state.creds,
      errorMessage: state.auth.errorMessage
    };
  });

  const [creds, setCreds] = useState({ ...redux.creds });

  function onSubmit(event) {
    event.preventDefault();
    dispatch(
      signin(creds, () => {
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
    console.log(creds);
  }

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        name="email"
        label="Email"
        value={creds.email}
        onChange={handleChange}
      />
      <TextInput
        name="password"
        label="Password"
        value={creds.password}
        onChange={handleChange}
      />
      <button>Sign In!</button>
    </form>
  );
};

export default Signin;
