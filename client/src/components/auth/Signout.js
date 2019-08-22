import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signout } from "../../actions";

const Signout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signout());
  });

  return <div>Sorry to see you go</div>;
};

export default Signout;
