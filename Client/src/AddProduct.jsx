import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user_id = JSON.parse(localStorage.getItem("user"))._id;
    let finaldata = { userid: user_id, ...inputs };
    let response = await axios.post(
      "http://localhost:2000/product/addproduct",
      finaldata
    );
    if(response.data){
      navigate("/");
    }

  };
  return (
    <>
      <div className="container mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col">
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                class="form-control"
                placeholder="Product Name"
                required
              />
            </div>
            <div class="col">
              <input
                type="number"
                name="price"
                value={inputs.price || ""}
                onChange={handleChange}
                class="form-control"
                placeholder="Product Price"
                required
              />
            </div>
          </div>
          <div class="row mt-5">
            <div class="col">
              <input
                type="text"
                name="category"
                value={inputs.category || ""}
                onChange={handleChange}
                class="form-control"
                placeholder="Product Category"
                required
              />
            </div>
            <div class="col">
              <input
                type="text"
                name="company"
                value={inputs.company || ""}
                onChange={handleChange}
                class="form-control"
                placeholder="Product Company"
                required
              />
            </div>
          </div>

          <div class="d-grid gap-2 col-1 mx-auto">
            <button class="btn btn-success mt-4" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default AddProduct;
