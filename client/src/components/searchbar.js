import { FaSearch } from "react-icons/fa";

function SearchBar({searchTerm, handleInputChange}) {
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
          onChange={handleInputChange}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
