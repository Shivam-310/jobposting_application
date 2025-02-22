import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <h2 className="text-2xl font-semibold">Create an account</h2>
        <p className="text-gray-500 mb-6">Your personal job finder is here</p>

        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md mb-4" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md mb-4" />
        <input type="text" placeholder="Mobile" className="w-full p-3 border rounded-md mb-4" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-md mb-4" />

        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-gray-500 text-sm">
            By creating an account, I agree to the terms of use and privacy policy
          </span>
        </div>

        <button className="bg-red-500 text-white w-full p-3 rounded-md">Create Account</button>

        <p className="mt-4 text-gray-500">
          Already have an account? <Link to="/login" className="text-red-500">Sign In</Link>
        </p>
      </div>

      <div className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url('https://source.unsplash.com/800x600/?astronaut,technology')` }}>
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-2xl font-bold">Your Personal Job Finder</h2>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
