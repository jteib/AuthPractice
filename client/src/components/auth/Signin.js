import React, { useEffect, useState } from "react";
import TextInput from "../common/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../actions";
import PassInput from "../common/PassInput";
import { initialState } from "../../reducers/initialState";

const Signin = ({ history }) => {
  const dispatch = useDispatch();
  const redux = useSelector(state => {
    const creds = initialState.creds;
    return {
      creds,
      errorMessage: state.errorMessage
    };
  });

  const [creds, setCreds] = useState({ ...redux.creds });

  useEffect(() => {
    console.log(redux);
  });

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
      <PassInput
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
