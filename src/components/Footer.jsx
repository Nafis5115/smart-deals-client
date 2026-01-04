import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#07162d] to-[#020b18] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Smart<span className="text-purple-500">Deals</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Groceries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact & Support</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                support@smartdeals.com
              </li>
              <li className="flex items-center gap-3">+880 123 456 789</li>
              <li className="flex items-start gap-3">
                <span>
                  123 Commerce Street,
                  <br />
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm text-gray-400">
          © 2025 SmartDeals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
