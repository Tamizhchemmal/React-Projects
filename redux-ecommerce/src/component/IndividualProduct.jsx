import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addonecart } from "../action/productaction";

function IndividualProduct() {
  const [product, setProdct] = useState([]);
  const [isbutton, setIsbutton] = useState(true);
  const proId = useParams();

  const dispatch = useDispatch();

  const prod = useSelector((red) => red.product);

  console.log(prod);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${proId.id}`
    );
    setProdct(await response.data);
    checkid(response.data.id);
  }

  function checkid(id) {
    const isinCart = prod.some((item) => item.id == id);

    setIsbutton(!isinCart);
  }
  function addtocart(pro) {
    dispatch(addonecart(pro));
    setIsbutton(false);
  }
  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-6 mt-5">
            <div className="p-5 mx-auto justify-content-center">
              <img src={product.image} height="350px" width="350px"></img>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div class=" p-3 h-100">
              <div class="card-body">
                <h5 class="card-title ">{product.title}</h5>
                <h6 class="card-subtitle mb-4 text-body-secondary fs-5">
                  {product.category}
                </h6>
                <h2>Rs.{product.price}/-</h2>
                <p class="card-text fs-5 mb-4 mt-4">
                  <b>Description:</b>
                  <br />
                  {product.description}
                </p>

                <div className="btn-group">
                  {isbutton && (
                    <button
                      className="btn btn-lg btn-outline-dark"
                      onClick={() => addtocart(product)}
                    >
                      Add to card
                    </button>
                  )}
                  <NavLink
                    to={"/cartpage"}
                    className="btn btn-lg btn-outline-dark"
                  >
                    Go to Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualProduct;
