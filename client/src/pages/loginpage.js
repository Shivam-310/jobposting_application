import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
        <h2 className="text-2xl font-semibold">Already have an account?</h2>
        <p className="text-gray-500 mb-6">Your personal job finder is here</p>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />

        <button className="bg-red-500 text-white w-full p-3 rounded-md">Sign in</button>
        <p className="mt-4 text-gray-500">
          Don't have an account? <Link to="/register" className="text-red-500">Sign Up</Link>
        </p>
      </div>

      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://source.unsplash.com/800x600/?astronaut,technology')`,
        }}
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-2xl font-bold">Your Personal Job Finder</h2>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
