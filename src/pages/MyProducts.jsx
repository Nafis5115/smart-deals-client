import React from "react";
const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Orange Juice",
  category: "Beverage",
  price: "$100",
  status: "Pending",
}));
const MyProducts = () => {
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
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{product.id}</td>

                <td className="px-6 py-4">
                  <div className="w-12 h-12 bg-gray-300 rounded" />
                </td>

                <td className="px-6 py-4 font-medium text-gray-900">
                  {product.name}
                </td>

                <td className="px-6 py-4 text-gray-700">{product.category}</td>

                <td className="px-6 py-4 font-semibold text-gray-900">
                  {product.price}
                </td>

                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-black">
                    {product.status}
                  </span>
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
