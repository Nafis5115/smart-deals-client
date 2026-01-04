import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow  p-4">
      <div className="bg-gray-300 h-44 rounded-md mb-4"></div>

      <h3 className="text-sm font-semibold text-gray-800 mb-2">
        {product.title}
      </h3>

      <p className="text-purple-600 font-semibold text-sm mb-4">
        {product.price}
      </p>

      <Link
        to={"/product-details"}
        className="w-full border cursor-pointer border-purple-500 text-purple-600 py-2 px-4 rounded-md text-sm hover:bg-purple-50"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
