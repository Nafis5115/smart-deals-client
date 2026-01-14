import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myProducts?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyProducts(data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    }
  }, [user?.email]);
  if (loading) return <Loading></Loading>;
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        My Products: <span className="text-purple-500">10</span>
      </h2>

      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">SL No</th>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Product Name</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Price</th>

              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {myProducts.map((product, index) => (
              <tr key={product._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{index + 1}</td>

                <td className="px-6 py-4">
                  <img
                    className="w-12 h-12 bg-gray-300 rounded object-cover"
                    src={product.imageURL}
                  />
                </td>

                <td className="px-6 py-4 font-medium text-gray-900">
                  {product.title}
                </td>

                <td className="px-6 py-4 text-gray-700">{product.category}</td>

                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.price}
                </td>

                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 cursor-pointer text-xs rounded border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition">
                      Edit
                    </button>

                    <button className="px-3 py-1.5 text-xs cursor-pointer rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                      Delete
                    </button>

                    <button className="px-3 py-1.5 text-xs cursor-pointer rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
                      Make Sold
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyProducts;
