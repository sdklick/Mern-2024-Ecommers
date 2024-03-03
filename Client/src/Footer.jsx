import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <NavLink to="/" className="navbar-brand">
                <i
                  className="fas fa-gift text-success"
                  style={{ fontSize: "40px" }}
                ></i>
              </NavLink>
            </span>

            <span class="mb-3 mb-md-0">© 2022 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <i
                className="fab fa-facebook-square"
                style={{ fontSize: "30px", color: "#316FF6" }}
              ></i>
            </li>
            <li class="ms-3">
              <i
                className="fab fa-linkedin"
                style={{ fontSize: "30px", color: "#0077B5" }}
              ></i>
            </li>
            <li class="ms-3">
              <i
                className="fab fa-instagram"
                style={{ fontSize: "30px", color: "rgb(250,126,30)" }}
              ></i>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
