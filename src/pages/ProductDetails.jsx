import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import BidModal from "../components/BidModal";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const productData = useLoaderData();

  const [open, setOpen] = useState(false);

  return (
    <section className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <img src={productData.imageURL} alt="" />

          <div>
            <Link
              to={"/"}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-2"
            >
              <ArrowLeft size={16} />
              Back To Products
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {productData.title}
            </h1>

            <span className="inline-block text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full mb-4">
              {productData.category}
            </span>

            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border">
              <p className="text-green-600 text-xl font-semibold">
                {`$ ${productData.discountPrice} - $ ${productData.price}`}
              </p>
              <p className="text-sm text-gray-500">Price starts from</p>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <p className="text-sm text-gray-600">
                <strong>Product ID:</strong> {productData._id}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border">
              <h3 className="font-semibold mb-3">Seller Information</h3>

              <div className="flex items-center gap-3 mb-3">
                <img
                  src={productData.sellerImageURL}
                  className="w-10 h-10 bg-gray-300 rounded-full"
                />
                <div>
                  <p className="font-medium">{productData.sellerName}</p>
                  <p className="text-xs text-gray-500">
                    crafts.by.sara@shop.net
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Contact:</strong> {productData.sellerEmail}
              </p>
              <p className="text-sm mt-2">
                <span className="inline-flex px-3 py-1 text-xs rounded-full bg-yellow-400 text-black">
                  On Sale
                </span>
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="w-full py-3 cursor-pointer rounded-lg text-white font-medium text-lg bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition"
            >
              I Want Buy This Product
            </button>
            <BidModal isOpen={open} onClose={() => setOpen(false)}></BidModal>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border mb-12">
          <h3 className="font-semibold mb-4">Product Description</h3>

          <div className="flex justify-between text-sm mb-3">
            <p>
              <strong>Condition :</strong>{" "}
              <span className="text-purple-600">{productData.condition}</span>
            </p>
            <p>
              <strong>Usage Time :</strong>{" "}
              <span className="text-purple-600">
                {productData.usageTime} months
              </span>
            </p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">
            {productData.description}
          </p>
        </div>

        <p className="text-gray-300 text-3xl font-bold mb-4">
          Only Visible to Owner
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Bids For This Products: <span className="text-purple-500">03</span>
        </h2>

        <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">SL No</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Seller</th>
                <th className="px-6 py-3 text-left">Bid Price</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className="px-6 py-4">{i}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded" />
                      <div>
                        <p className="font-medium">Orange Juice</p>
                        <p className="text-xs text-gray-500">$22.5</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full" />
                      <div>
                        <p className="font-medium">Sara Chen</p>
                        <p className="text-xs text-gray-500">
                          crafts.by.sara@shop.net
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 font-semibold">$10</td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-xs cursor-pointer rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
                        Accept Offer
                      </button>
                      <button className="px-3 py-1 text-xs cursor-pointer rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                        Reject Offer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
