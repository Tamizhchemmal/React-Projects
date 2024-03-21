import React from "react";
import { useNavigate } from "react-router-dom";

function Productlist({ filterdata }) {
  const navigate = useNavigate();
  function gotopage(id) {
    navigate(`/product/${id}`);
  }
  return (
    <>
      {filterdata.map((product, index) => (
        <div className="col-md-4 col-lg-3 col-sm-6 shadow-sm" key={index}>
          <div
            className="card h-80 prdcrd"
            onClick={() => gotopage(product.id)}
          >
            <img
              src={product.image}
              height={250}
              className="card-img-top p-4"
              alt="Cardimage"
            ></img>
            ,
            <div className="card-body text-center m-3">
              <h5 className="card-title mb-3">
                {product.title.substring(0, 12)}
              </h5>
              <a className="btn btn-outline-dark">Buy Now</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Productlist;
