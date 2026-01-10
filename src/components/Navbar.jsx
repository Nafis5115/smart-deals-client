import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "All Products", link: "/all-products" },
    { name: "My Products", link: "/my-products" },
    { name: "My Bids", link: "/my-bids" },
    { name: "Create Product", link: "/create-product" },
  ];

  const { user, logout, loading } = useContext(AuthContext);

  return (
    <div>
      <nav className="bg-white px-8 py-4 shadow-md flex justify-between items-center z-10">
        <div>
          <h1 className="font-bold text-2xl">
            Smart <span className="text-purple-500">Deals</span>
          </h1>
        </div>
        <ul className="flex gap-4 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-600 font-semibold" : ""
                }
                to={link.link}
                end={link.link === "/"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {!loading ? (
          !user ? (
            <div className="flex gap-3">
              <Link to={"login"} className="btn btn-outline btn-primary btn-sm">
                Login
              </Link>
              <Link to={"sign-up"} className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          ) : (
            <div>
              <button onClick={logout} className="btn btn-accent">
                Logout
              </button>
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
