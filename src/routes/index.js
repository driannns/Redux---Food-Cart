import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Product from "../views/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default Router;
