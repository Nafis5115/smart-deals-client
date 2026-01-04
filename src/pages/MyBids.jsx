import React from "react";
const bids = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  product: "Orange Juice",
  price: "$22.5",
  seller: {
    name: "Sara Chen",
    email: "crafts.by.sara@shop.net",
  },
  bidPrice: "$10",
  status: "Pending",
}));
const MyBids = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        My Bids: <span className="text-purple-500">10</span>
      </h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-black/20">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">SL No</th>
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">Seller</th>
              <th className="px-6 py-4 text-left">Bid Price</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-black/20">
            {bids.map((bid) => (
              <tr key={bid.id} className="hover:bg-gray-50 transition">
                {/* SL */}
                <td className="px-6 py-4 font-medium">{bid.id}</td>

                {/* Product */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded" />
                    <div>
                      <p className="font-medium text-gray-900">{bid.product}</p>
                      <p className="text-gray-500 text-xs">{bid.price}</p>
                    </div>
                  </div>
                </td>

                {/* Seller */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {bid.seller.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {bid.seller.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Bid Price */}
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {bid.bidPrice}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-black">
                    {bid.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <button className="px-4 py-1.5 text-sm rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                    Remove Bid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyBids;
