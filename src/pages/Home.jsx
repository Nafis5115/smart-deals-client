import React, { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const productsData = useLoaderData();
  const [search, setSearch] = useState("");
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="bg-white mt-1">
      <section className="bg-linear-to-r from-purple-50 via-white to-cyan-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Deal Your <span className="text-purple-600">Products</span>
          <br />
          In A <span className="text-purple-600">Smart</span> Way !
        </h1>

        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white shadow shadow-black/20 rounded-full w-full max-w-xl overflow-hidden">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search For Products, Categories..."
              className="flex-1 px-5 py-3 outline-none text-sm"
            />
            <button className="bg-purple-600 p-3 text-white h-full">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to={"/all-products"}
            className="bg-purple-600 cursor-pointer text-white px-6 py-2 rounded-md text-sm"
          >
            Watch All Products
          </Link>
          <Link
            to={"/create-product"}
            className="border cursor-pointer border-purple-600 text-purple-600 px-6 py-2 rounded-md text-sm"
          >
            Post an Product
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Recent <span className="text-purple-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product}></ProductCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-purple-600 text-white px-8 py-2 rounded-md text-sm">
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
