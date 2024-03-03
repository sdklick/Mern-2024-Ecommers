import React, { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
 

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  },[]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post("http://localhost:2000/user/login", inputs);
    if (response.data.auth) {
      //localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      localStorage.setItem("token", JSON.stringify(response.data.auth));
      navigate("/");
    } else {
      toast('Invalid credentials');
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col">
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                class="form-control"
                placeholder="Email"
                aria-label="First name"
                required
              />
            </div>
            <div class="col">
              <input
                type="text"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                class="form-control"
                placeholder="Password"
                aria-label="Last name"
                required
              />
            </div>
            <div class="d-grid gap-2 col-1 mx-auto">
              <button className="btn btn-success">Login</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Login;
