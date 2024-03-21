import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

import Products from "./component/Products";
import Contact from "./component/Contact";
import IndividualProduct from "./component/IndividualProduct";
import CartPage from "./component/CartPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/product/:id" element={<IndividualProduct />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cartpage" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
