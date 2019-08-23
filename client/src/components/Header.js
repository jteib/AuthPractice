import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HeaderStyle.css";

const Header = () => {
  const redux = useSelector(state => {
    return { authenticated: state.auth.authenticated };
  });

  const { authenticated } = redux;
  const activeStyle = { color: "#F15B2A" };
  const renderNavLinks = () =>
    authenticated ? (
      <div>
        <NavLink to="/signout" activeStyle={activeStyle}>
          Sign Out
        </NavLink>
        {" | "}
        <NavLink to="/feature" activeStyle={activeStyle}>
          Feature
        </NavLink>
      </div>
    ) : (
      <div>
        <NavLink to="/signup" activeStyle={activeStyle}>
          Sign Up
        </NavLink>
        {" | "}
        <NavLink to="/signin" activeStyle={activeStyle}>
          Sign In
        </NavLink>
      </div>
    );

  return (
    <div className="header">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Redux Auth
      </NavLink>
      {renderNavLinks()}
    </div>
  );
};

export default Header;
