import React, { useEffect, useState } from "react";
import axios from "axios";
import Productlist from "./Productlist";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterdata, setFilter] = useState(products);

  let componentMounted = true;
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    const response = await axios.get("https://fakestoreapi.com/products");

    if (componentMounted) {
      setProducts(await response.data);
      setFilter(await response.data);
      console.log(response.data);
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    };
  }

  // function handleall() {
  //   setProducts(filterdata);
  // }
  function filterproduct(filtr) {
    const updatedproduct = products.filter((data) => data.category === filtr);
    setFilter(updatedproduct);
  }

  const List = () => {
    return (
      <>
        <div className="d-flex justify-content-center p-3">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterproduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterproduct("women's clothing")}
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterproduct("jewelery")}
          >
            Jewelery
          </button>
        </div>
      </>
    );
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-4 col-lg-3 col-sm-6">
          <Skeleton height={350} count={4} />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-4 mb-2">
            <h4 className="text-center fw-bolder fs-1">Latest Products</h4>
          </div>
        </div>
        <hr></hr>
        <div className="row d-flex justify-content-center">
          <div className="col-12">{<List />}</div>
        </div>
        <h2 className="display-4 text-center">Product List</h2>

        <div className="row g-4">
          {loading ? <Loading /> : <Productlist filterdata={filterdata} />}
        </div>
      </div>
    </>
  );
}

export default Products;
