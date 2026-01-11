import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const CreateProduct = () => {
  const [condition, setCondition] = useState("Brand New");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [usageTime, setUsageTime] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerImageURL, setSellerImageURL] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const resetForm = () => {
    setCondition("Brand New");
    setCategory("");
    setTitle("");
    setPrice("");
    setDiscountPrice("");
    setUsageTime("");
    setImageURL("");
    setSellerName("");
    setSellerEmail("");
    setSellerImageURL("");
    setLocation("");
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      discountPrice,
      category,
      imageURL,
      description,
      condition,
      usageTime,
      sellerEmail,
      sellerImageURL,
      sellerName,
      location,
    };
    fetch("http://localhost:3000/create-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resetForm();
      })
      .catch((e) => console.log(e));
  };
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 mt-1">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="flex items-center cursor-pointer gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back To Products
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">
          Create <span className="text-purple-500">A Product</span>
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleCreateProduct} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  className="w-full h-11 px-4 rounded-lg border border-gray-200
        focus:outline-none focus:ring-2 focus:ring-purple-500/30
        focus:border-purple-500 text-sm bg-white"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select a Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home & Living">Home & Living</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                value={price}
                label="Price"
                placeholder="e.g. 18.5"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                value={discountPrice}
                label="Discount Price"
                placeholder="Optional (default = Min Price)"
                onChange={(e) => setDiscountPrice(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Condition
                </label>
                <div className="flex items-center gap-6">
                  <Radio
                    label="Brand New"
                    value="Brand New"
                    checked={condition === "Brand New"}
                    onChange={(e) => setCondition(e.target.value)}
                  />
                  <Radio
                    label="Used"
                    value="Used"
                    checked={condition === "Used"}
                    onChange={(e) => setCondition(e.target.value)}
                  />
                </div>
              </div>

              <Input
                value={usageTime}
                label="Product Usage time"
                onChange={(e) => setUsageTime(e.target.value)}
                placeholder="e.g. 1 year 3 month"
              />
            </div>

            <Input
              value={imageURL}
              label="Your Product Image URL"
              placeholder="https://..."
              onChange={(e) => setImageURL(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                value={sellerName}
                label="Seller Name"
                placeholder="e.g. Artisan Roasters"
                onChange={(e) => setSellerName(e.target.value)}
              />
              <Input
                value={sellerEmail}
                label="Seller Email"
                placeholder="leli31955@nrlord.com"
                onChange={(e) => setSellerEmail(e.target.value)}
              />
            </div>

            <Input
              value={sellerImageURL}
              label="Seller Image URL"
              placeholder="https://..."
              onChange={(e) => setSellerImageURL(e.target.value)}
            />

            <Input
              value={location}
              label="Location"
              placeholder="City, Country"
              onChange={(e) => setLocation(e.target.value)}
            />

            <Textarea
              value={description}
              label="Simple Description about your Product"
              placeholder="e.g. I bought this product 3 month ago..."
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-medium text-lg cursor-pointer
              bg-linear-to-r from-purple-600 to-purple-500
              hover:from-purple-700 hover:to-purple-600 transition"
            >
              Create A Product
            </button>
          </form>
        </div>
      </div>
    </section>
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

function Radio({ label, ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="condition"
        {...props}
        className="w-5 h-5 accent-purple-500"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        {...props}
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-gray-200
        focus:outline-none focus:ring-2 focus:ring-purple-500/30
        focus:border-purple-500 text-sm resize-none"
      />
    </div>
  );
}

export default CreateProduct;
