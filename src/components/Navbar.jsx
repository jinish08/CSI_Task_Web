import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container nav_bg">
        <nav className="navbar">
          <div className="container-nav">
            <div className="nav-brand">
              <NavLink className="navbar-brand" to="/">
                <img
                  style={{ width: "160px" }}
                  className="logo"
                  src="https://djcsi.co.in/assets/images/NEWDJCSILOGO.png"
                  alt="company-logo"
                  class="fixed-logo"
                />
              </NavLink>
            </div>
            <div className="navbar-right">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/favlist"
                  >
                    Your Favorites
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
