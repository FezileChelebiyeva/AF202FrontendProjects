import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container-h">
        <div className="header">
          <div className="logo">Website</div>

          <ul>
            <li>
              <NavLink to={"/"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/sign-up-page"}>Sign Up</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/users-page"}>Users</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
