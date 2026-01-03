import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white px-8 py-4 shadow-md flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">
            Smart <span className="text-purple-500">Deals</span>
          </h1>
        </div>
        <ul className="flex gap-4 text-[14px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="">All Products</a>
          </li>
          <li>
            <a href="">My Products</a>
          </li>
          <li>
            <a href="">My Bids</a>
          </li>
          <li>
            <a href="">Create Product</a>
          </li>
        </ul>
        <div className="flex gap-3">
          <Link to={"login"} class="btn btn-outline btn-primary btn-sm">
            Login
          </Link>
          <Link to={"sign-up"} className="btn btn-primary btn-sm">
            Register
          </Link>
          <div>
            <img
              className="hidden w-10 h-10 rounded-full object-cover border-2 border-black/20 cursor-pointer"
              src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
