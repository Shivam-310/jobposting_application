import React from 'react'
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="bg-red-400 py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white font-bold text-2xl">Jobfinder</h1>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="text-white font-medium px-4 py-2 rounded-lg">
           <Link to="/login">Login</Link>
          </button>
          <button className="bg-white text-red-500 font-medium px-4 py-2 rounded-lg shadow-md">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default navbar
