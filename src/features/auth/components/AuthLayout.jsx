
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="h-screen grid lg:grid-cols-12">

       <div className="hidden lg:block lg:col-span-8 relative">
             <Image
               src="/image/login.jpg"
               alt="login"
               fill
               className="object-cover"
             />
     
             {/* Overlay Text */}
             <div className="absolute bottom-10 left-10 text-white">
               <h1 className="text-3xl font-bold">
                 Welcome To Taleb Dashboard
               </h1>
               <p className="text-sm mt-2 opacity-90">
                 Your All-in-One Platform To Analyze Data...
               </p>
             </div>
           </div>

      <div className="lg:col-span-4 flex items-center justify-center mx-4">
        {children}
      </div>

    </div>
  );
}