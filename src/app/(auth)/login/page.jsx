// import React from "react";
// import Image from "next/image";


// const page = () => {
//   return (
//     <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

//       {/* LEFT IMAGE (hidden on mobile) */}
//       <div className="hidden lg:block lg:col-span-8 relative">
//         <Image
//           src="/image/login.jpg"
//           alt="login"
//           fill
//           className="object-cover"
//         />

//         {/* Overlay Text */}
//         <div className="absolute bottom-10 left-10 text-white">
//           <h1 className="text-3xl font-bold">
//             Welcome To Taleb Dashboard
//           </h1>
//           <p className="text-sm mt-2 opacity-90">
//             Your All-in-One Platform To Analyze Data...
//           </p>
//         </div>
//       </div>

//       {/* RIGHT FORM (full width on mobile) */}
//       <div className="col-span-1 lg:col-span-4 flex items-center justify-center bg-gray-50 p-6">

//         <div className="w-full max-w-md bg-white border-gray-100 border-2 rounded-xl grid gap-1 py-10 px-4 shadow-lg">
          
//           <h1 className="text-4xl lg:text-6xl font-secondary text-primary-color text-center">
//             Taleb
//           </h1>

//           <p className="text-center text-xl font-bold text-gray-500">
//             Admin Access
//           </p>

//           <p className="text-center text-sm font-bold">
//             Welcome back, Admin!
//           </p>

//            <p className="text-center text-sm text-gray-500">
//             Please log in to manage your exams, view student reports, and configure your dashboard settings.
//           </p>

//           {/* Email */}
//           <label htmlFor="" className="text-gray-700">Email Address</label>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-3 text-[#BABABA] border rounded-md"
//           />

//           {/* Password */}
//           <label htmlFor="" className="text-gray-700">Password</label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="w-full p-3 text-[#BABABA] border rounded-md mb-2"
//           />

//           <div className="text-right text-sm text-blue-600">
//             Forgot Password?
//           </div>

//           {/* Button */}
//           <div className="w-full grid items-center justify-center gap-y-4 mt-2">
//           <button className="bg-blue-800 text-white px-5 py-1 rounded-md">
//             Login
//           </button>

//           <button className="border border-blue-800 text-blue-800 px-5 py-1 rounded-md">
//             Create New Account
//           </button>

//           </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default page;



import LoginForm from "@/features/auth/components/LoginForm";

export default function Page() {
  return <LoginForm />;
}