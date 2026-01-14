import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import { useLoaderData } from "react-router";
import { useMemo } from "react";

const MyBids = () => {
  const products = useLoaderData();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [myBids, setMyBids] = useState([]);
  const productMap = useMemo(() => {
    const map = {};
    products.forEach((p) => (map[p._id] = p));
    return map;
  }, [products]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/myBids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyBids(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [user?.email]);
  if (loading) return <Loading></Loading>;
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold text-center mb-8">
        My Bids:{" "}
        <span className="text-purple-500">
          {myBids.length || products.length === 0 ? 0 : myBids.length}
        </span>
      </h2>

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
          {myBids.length || products.length === 0 ? (
            <tbody></tbody>
          ) : (
            <tbody className="divide-y divide-black/20">
              {myBids.map((bid, index) => {
                const product = productMap[bid.productId];

                return (
                  <tr key={bid._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium">{index + 1}</td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          className="w-12 h-12 bg-gray-200 rounded object-cover"
                          src={product.imageURL}
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {product.title}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {product?.price}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full bg-gray-300 object-cover"
                          src={product.sellerImageURL}
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {product.sellerName}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.sellerEmail}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {bid.price}
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-black">
                        {bid.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <button className="px-4 py-1.5 text-sm rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                        Remove Bid
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </section>
  );
};

export default MyBids;
