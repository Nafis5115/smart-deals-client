import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "All Products", link: "/all-products" },
    { name: "My Products", link: "/my-products" },
    { name: "My Bids", link: "/my-bids" },
    { name: "Create Product", link: "/create-product" },
  ];

  return (
    <div>
      <nav className="bg-white px-8 py-4 shadow-md flex justify-between items-center">
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
                  isActive && "text-purple-600 font-semibold"
                }
                to={link.link}
                end={link.link === "/"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <Link to={"login"} className="btn btn-outline btn-primary btn-sm">
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
