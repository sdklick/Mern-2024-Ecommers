import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post(
      "http://localhost:2000/user/userdata",
      inputs
    );
    console.log(response.data);
    if (response.data) {
      localStorage.setItem("userData", JSON.stringify(response.data.data));
      localStorage.setItem("token", JSON.stringify(response.data.auth));
      navigate("/");
    }
  };
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Name"
                  aria-label="First name"
                  required
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Email"
                  aria-label="Last name"
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
            </div>
            <button className="mt-3 btn btn-success">Signup</button>
          </form>
        </div>
        <div class="card-footer text-body-secondary">2 days ago</div>
      </div>
    </>
  );
};

export default Signup;
