import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mx-auto max-w-3xl mt-6">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <span className="p-3 bg-gray-100">
          <FaSearch className="text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="Type any job title"
          className="w-full p-3 outline-none text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Skill Filters (Example Tags) */}
      <div className="flex flex-wrap gap-2 mt-3">
        {["Frontend", "CSS", "JavaScript"].map((skill, index) => (
          <span
            key={index}
            className="flex items-center bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm"
          >
            {skill}
            <button className="ml-2 text-red-600 font-bold">✖</button>
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <button className="text-red-500 font-medium">Clear</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
