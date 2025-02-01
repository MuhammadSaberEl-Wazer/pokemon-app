import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg mb-[2rem]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <Link to="/" className="text-gray-800 text-2xl font-bold mb-4 md:mb-0">
          Pokemon App
        </Link>

        <div className="flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
