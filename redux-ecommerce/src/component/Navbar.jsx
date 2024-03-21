import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const cartcount = useSelector((red) => red.product);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body shadow-lg "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand fs-3 fw-bold">ReduxShop</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link fs-5" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/product"} className="nav-link fs-5">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link fs-5">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-outline-light m-2">Login</button>
              <button className="btn btn-outline-light m-2">Register</button>
              <button
                className="btn btn-outline-light m-2"
                onClick={() => navigate("/cartpage")}
              >
                Cart ({cartcount.length})
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
