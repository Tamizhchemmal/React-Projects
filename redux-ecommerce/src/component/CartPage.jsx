import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addonecart } from "../action/productaction";

function CartPage() {
  const cartProduct = useSelector((red) => red.product);
  const dispatch = useDispatch();

  function addcount(pro) {
    dispatch(addonecart(pro));
  }
  console.log(cartProduct);
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mt-4 fw-bold">CART PAGE</h2>
        {cartProduct &&
          cartProduct.map((pro) => (
            <div className="col-12 d-flex g-3 align-items-center bg-body-tertiary m-3 border border-secondary rounded p-4">
              <img
                src={pro.image}
                className="img-fluid"
                height="150px"
                width="150px"
                alt="img"
              ></img>
              <div className="flex-fill d-flex flex-column align-items-center">
                <h2 className="">{pro.title}</h2>
                <div className="display-6">
                  {pro.qty} X {pro.price} = {pro.qty * pro.price}
                </div>
                <div className="btn-group mt-3">
                  <button className="btn btn-lg btn-outline-dark">-</button>
                  <button
                    className="btn btn-lg btn-outline-dark"
                    onClick={() => addcount(pro)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CartPage;
