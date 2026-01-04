import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const CreateProduct = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
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
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Title"
                placeholder="e.g. Yamaha Fz Guitar for Sale"
              />
              <Select label="Category" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Min Price You want to Sale ($)"
                placeholder="e.g. 18.5"
              />
              <Input
                label="Max Price You want to Sale ($)"
                placeholder="Optional (default = Min Price)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Condition
                </label>
                <div className="flex items-center gap-6">
                  <Radio label="Brand New" defaultChecked />
                  <Radio label="Used" />
                </div>
              </div>

              <Input
                label="Product Usage time"
                placeholder="e.g. 1 year 3 month"
              />
            </div>

            <Input label="Your Product Image URL" placeholder="https://..." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Seller Name" placeholder="e.g. Artisan Roasters" />
              <Input label="Seller Email" placeholder="leli31955@nrlord.com" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Seller Contact" placeholder="e.g. +1-555-1234" />
              <Input label="Seller Image URL" placeholder="https://..." />
            </div>

            <Input label="Location" placeholder="City, Country" />

            <Textarea
              label="Simple Description about your Product"
              placeholder="e.g. I bought this product 3 month ago..."
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

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        className="w-full h-11 px-4 rounded-lg border border-gray-200
        focus:outline-none focus:ring-2 focus:ring-purple-500/30
        focus:border-purple-500 text-sm bg-white"
      >
        <option>Select a Category</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home & Living</option>
      </select>
    </div>
  );
}

function Radio({ label, defaultChecked }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name="condition"
        defaultChecked={defaultChecked}
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
