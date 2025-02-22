function JobPost({ logo, title, location, salary, tags, type, mode }) {
    return (
      <div className="flex items-center p-4 bg-white shadow-md rounded-lg border border-gray-200 mb-4">
        
        <div className="w-16 h-16 flex-shrink-0">
          <img src={logo} alt={title} className="w-full h-full object-cover rounded-full" />
        </div>

        <div className="flex-1 ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="text-gray-600 text-sm flex items-center gap-2">
            <span>📍 {location}</span> | <span>💰 {salary}</span>
          </div>
  
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
  
          
          <div className="mt-2 text-sm text-gray-500 flex gap-3">
            <span className="text-red-500">{mode}</span>
            <span className="text-green-500">{type}</span>
          </div>
        </div>
  
        
        <button className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md">
          View details
        </button>
      </div>
    );
  }
  
  export default JobPost;
  