import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [inputs, setInputs] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getproductdetails();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await axios.put(
      `http://localhost:2000/product/updateproduct/${params.id}`,
      inputs
    );
    navigate("/");
  };
  const getproductdetails = async () => {
    let result = await axios.get(
      `http://localhost:2000/product/updateget/${params.id}`
    );
    let { name, price, category, company } = result.data;
    setInputs({ name, price, category, company });
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
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
