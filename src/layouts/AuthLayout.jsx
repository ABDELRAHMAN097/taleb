
import { useState } from "react";
import { Outlet } from "react-router-dom";

const slides = [
  {
    title: "Welcome To Taleb Dashboard",
    description: "Your All-In-One Platform To Automate Exams, Track Student Progress, And Manage Your Wallet Anytime, Anywhere."
  },
  {
    title: "Flexible Exam Builder",
    description: "Create, configure, and distribute online exams with ease and get instant automated grading."
  },
  {
    title: "Analyze Data and Reports",
    description: "Gain deep insights into student performance and track key educational metrics with advanced reporting tools."
  },
  {
    title: "Secure Wallet & Payments",
    description: "Easily manage your educational expenses, wallet balances, and subscriptions securely in one place."
  }
];

const AuthLayout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-[1fr_30%] overflow-hidden">

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
        <div className="absolute inset-0 bg-[#000000a6] flex flex-col justify-end p-16 text-white select-none">
          <div className="w-full max-w-2xl space-y-6">
            
            {/* Slide Text Content */}
            <div className="space-y-3 min-h-[140px]">
              <h1 className="text-4xl font-bold tracking-wide">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed font-light">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Controls: Indicators & Next Button */}
            <div className="flex items-center justify-between pt-6">
              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-10 bg-blue-800" 
                        : "w-2.5 bg-white hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="bg-white text-blue-900 font-bold px-10 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-md text-base"
              >
                Next
              </button>
            </div>

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