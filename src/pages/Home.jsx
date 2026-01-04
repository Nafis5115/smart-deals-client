import React from "react";
import { Search } from "lucide-react";
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
const Home = () => {
  return (
    <div className="bg-white mt-1">
      {/* HERO SECTION */}
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

        {/* SEARCH */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white shadow shadow-black/20 rounded-full w-full max-w-xl overflow-hidden">
            <input
              type="text"
              placeholder="search For Products, Categories..."
              className="flex-1 px-5 py-3 outline-none text-sm"
            />
            <button className="bg-purple-600 p-3 text-white h-full">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm">
            Watch All Products
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-md text-sm">
            Post an Product
          </button>
        </div>
      </section>

      {/* RECENT PRODUCTS */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Recent <span className="text-purple-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow  p-4">
              <div className="bg-gray-300 h-44 rounded-md mb-4"></div>

              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>

              <p className="text-purple-600 font-semibold text-sm mb-4">
                {product.price}
              </p>

              <button className="w-full border border-purple-500 text-purple-600 py-2 rounded-md text-sm hover:bg-purple-50">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* SHOW ALL */}
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
