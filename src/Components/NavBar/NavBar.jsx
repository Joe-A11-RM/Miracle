import React from "react";

export default function NavBar() {
  return (
    <div>
      <div className="navbar-layout">
        <div className="navbar-logo-menu">
          <img className="menu" src="assets/Menu.svg" alt="menu" />
          <img className="logo" src="assets/Navbarlogo.svg" alt="menu" />
        </div>
        <div className="col-lg-4 mx-auto">
          <input
            className="form-control"
            style={{ width: "100%" }}
            placeholder="Search Miracle Products"
          />
        </div>
      </div>
    </div>
  );
}
