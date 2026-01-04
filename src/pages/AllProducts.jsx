import React from "react";
import ProductCard from "../components/ProductCard";
const products = [
  {
    title: "Yamaha Fz Guitar [ Full Fresh Condition ]",
    price: "$ 55.99 - 75",
  },
  {
    title: "Hero Splender Ev - [ 2 Year Used ]",
    price: "$ 55.99 - 75",
  },
  {
    title: "Duranta E-Bike With 97% Battery Life [ 1 Month Used ]",
    price: "$ 55.99 - 75",
  },
  {
    title: "Yamaha Fz Guitar [ Full Fresh Condition ]",
    price: "$ 55.99 - 75",
  },
  {
    title: "Hero Splender Ev - [ 2 Year Used ]",
    price: "$ 55.99 - 75",
  },
  {
    title: "Duranta E-Bike With 97% Battery Life [ 1 Month Used ]",
    price: "$ 55.99 - 75",
  },
];
const AllProducts = () => {
  return (
    <div>
      <section className="py-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          All <span className="text-purple-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard product={product} key={index}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
