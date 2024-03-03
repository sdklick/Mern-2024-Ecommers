import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const ShowProducts = () => {
  const [products, setproducts] = useState([]);
  const [isproductavalavil, setisproductavalaval] = useState(false);
 
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let allproduct = await axios.get(
      "http://localhost:2000/product/allproduct"
    );

    if (allproduct.data == false) {
      setisproductavalaval(false);
    } else {
      setproducts(allproduct.data);
      setisproductavalaval(true);
    }
  };
  const deleteproduct = async (pid) => {
    let result = await axios.delete(
      `http://localhost:2000/product/deleteproduct/${pid}`
    );
    getdata();
  };
  let searchproduct = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await axios.get(
        `http://localhost:2000/product/search/${key}`
      );
      if (result) {
        setproducts(result.data);
      }
    } else {
      getdata();
    }
  };
  return (
    <>
      <div class="d-grid gap-2 col-4 mx-auto mt-4">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={searchproduct}
          />
        </form>
      </div>

      {isproductavalavil ? (
        <div class="container mt-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {products.map(({ name, price, company, category, _id }) => {
              return (
                <div key={_id}>
                  <div class="col">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{category}</p>
                        <p class="card-text">{price}</p>
                        <p class="card-text">{company}</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button
                            className="btn btn-dark"
                            onClick={() => deleteproduct(_id)}
                          >
                            <i
                              class="fas fa-trash-alt"
                              style={{ color: "red", fontSize: "25px" }}
                            ></i>
                          </button>
                          <NavLink to={`/update/${_id}`}>
                            <button className="btn btn-primary">
                              <i
                                class="fas fa-edit"
                                style={{ color: "white", fontSize: "25px" }}
                              ></i>
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>No Product</div>
      )}
      <ToastContainer />
    </>
  );
};

export default ShowProducts;
