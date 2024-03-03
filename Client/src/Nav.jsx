import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("token");
  const userdata = localStorage.getItem("userData");
  
  
  const navigate = useNavigate();
  const logout = () => {
    let surelogout = confirm("Are You Sure Logout");
    if (surelogout) {
      localStorage.clear();
      navigate("/signup");
    }
  };
  return (
    <>
      {auth ? (
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand">
                <i className="fas fa-gift text-success"></i>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/add"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Add Product
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/update"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Update Product
                    </NavLink>
                  </li>

                  <li className="nav-item"></li>
                </ul>
                <div class="d-flex">
                  <div class="dropdown">
                    <button
                      class="btn btn-success dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="far fa-user-circle text-warning"></i>{" "}
                      {JSON.parse(userdata).name}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
                      <li>
                        <NavLink
                          to="/profile"
                          className="dropdown-item"
                          aria-current="page"
                        >
                          <i className="fas fa-id-badge text-info"></i>
                          <span className="me-2"></span>
                          My Profile
                        </NavLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                          to="/login"
                          onClick={logout}
                          className="dropdown-item"
                        >
                          <i class="fa fa-sign-out text-warning"></i>
                          <span className="me-2"></span>
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <>
          <div>
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <NavLink to="/login" className="navbar-brand">
                  <i className="fas fa-gift text-success"></i>
                </NavLink>
                <div class="d-flex gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-success">
                    <NavLink
                      to="/login"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </button>
                  <button class="btn btn-primary">
                    <NavLink
                      to="/signup"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Signup
                    </NavLink>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Nav;
