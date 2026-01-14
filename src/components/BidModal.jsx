import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const BidModal = ({ isOpen, onClose, productId, onBidCreated }) => {
  const { loading, user } = useContext(AuthContext);
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");

  const handleCreateBid = (e) => {
    e.preventDefault();
    const newBid = {
      buyerName: user.displayName,
      buyerEmail: user.email,
      buyerImageURL: user.photoURL,
      price: Number(price),
      contact,
      productId,
      status: "Pending",
    };
    fetch("http://localhost:3000/create-bid", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        onBidCreated(data);
        onClose();
      })
      .catch((e) => console.log(e));
  };
  if (loading) return <Loading></Loading>;
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-40" />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <div
          className="bg-white w-full max-w-xl rounded-xl shadow-xl p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold text-center mb-6">
            Give Seller Your Offered Price
          </h2>

          <form onSubmit={handleCreateBid} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Buyer Name"
                placeholder="Your name"
                value={user.displayName}
                readOnly
              />
              <Input
                label="Buyer Email"
                placeholder="Your Email"
                value={user.email}
                readOnly
              />
            </div>

            <Input
              label="Buyer Image URL"
              placeholder="https://...your_img_url"
              value={user.photoURL}
              readOnly
            />

            <Input
              label="Place your Price"
              placeholder="e.g. Artisan Roasters"
              onChange={(e) => setPrice(e.target.value)}
            />

            <Input
              label="Contact Info"
              placeholder="e.g. +1-555-1234"
              onChange={(e) => setContact(e.target.value)}
            />

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-50 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-lg text-white font-medium
                bg-linear-to-r from-purple-600 to-purple-500
                hover:from-purple-700 hover:to-purple-600 transition"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full h-11 px-4 rounded-lg border border-gray-200
        focus:outline-none focus:ring-2 focus:ring-purple-500/30
        focus:border-purple-500 text-sm"
      />
    </div>
  );
}

export default BidModal;
