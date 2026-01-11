import React from "react";
import ProductCard from "../components/ProductCard";
import { useLoaderData } from "react-router";

const AllProducts = () => {
  const productsData = useLoaderData();
  return (
    <div>
      <section className="py-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          All <span className="text-purple-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product, index) => (
            <ProductCard product={product} key={index}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
