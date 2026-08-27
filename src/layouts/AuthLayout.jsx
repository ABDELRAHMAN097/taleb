
import { Outlet } from "react-router-dom";
import SlidesLayout from "@/components/SlidesLayout";


const AuthLayout = () => {


  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-[1fr_40%] overflow-hidden">

      <div
        className="hidden lg:flex relative w-full sticky h-screen justify-center items-center"
        style={{
          backgroundImage: 'url("/login.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Full Image Overlay covering the entire background image */}
        <div className="absolute inset-0 bg-[#00000083] flex flex-col justify-end p-16 text-white select-none">
          <div className="w-full max-w-2xl space-y-6">
            
            {/* Slide Text Content */}
           <SlidesLayout />

          

          </div>
        </div>
      </div>

      <div className="w-full overflow-y-auto">
  <div className="min-h-screen bg-[#F4F6FA] flex items-center justify-center px-4 py-8">
    <Outlet />
  </div>
</div>

    </div>
  );
}

export default AuthLayout;