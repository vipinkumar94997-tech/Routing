import React from "react";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>Product</div>
      <Outlet />
    </div>
  );
};

export default Product;
