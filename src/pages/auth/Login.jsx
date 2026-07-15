import { Link } from "react-router-dom";


export default function Login() {
  return (
   <div className="w-full max-w-md bg-white border-gray-100 border-2 rounded-xl grid gap-1 py-10 px-4  shadow-lg">
          
          <h1 className="text-4xl lg:text-6xl font-secondary text-primary-color text-center">
            Taleb
          </h1>

          <p className="text-center text-xl font-bold text-gray-500">
            Admin Access
          </p>

          <p className="text-center text-sm font-bold">
            Welcome back, Admin!
          </p>

           <p className="text-center text-sm text-gray-500">
            Please log in to manage your exams, view student reports, and configure your dashboard settings.
          </p>

          <form action="">
          {/* Email */}
          <label htmlFor="" className="text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 text-[#BABABA] border rounded-md"
          />

          {/* Password */}
          <label htmlFor="" className="text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 text-[#BABABA] border rounded-md mb-2"
          />

          <Link
              to="/forgot-password"
              >
          <div className="text-right text-sm text-blue-600">
            Forgot Password?
          </div>
              </Link>
            
          {/* Button */}
          <div className="w-full grid items-center justify-center gap-y-4 mt-2">
          <button className="bg-blue-800 text-white px-10 py-2 rounded-md">
            Login
          </button>
                      
             <Link
              to="/register"
              className="border border-blue-800 text-blue-800 px-10 py-2 rounded-md font-semibold text-center hover:bg-blue-50 transition-colors"
              >
              Create New Account
            </Link>


          </div>
              </form>  
        </div>
  )
}