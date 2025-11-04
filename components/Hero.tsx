"use client";

import Image from "next/image";
import { useEffect } from "react";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Add animation classes after component mounts
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-in');
      }, index * 150);
    });
  }, []);

  return (
    <section className="hero bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight animate-on-scroll opacity-0 translate-y-4">
            Find, book, or rent a car — quickly and easily!
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto md:mx-0 mb-6 md:mb-8 animate-on-scroll opacity-0 translate-y-4">
            Streamline your car rental experience with our effortless booking process.
          </p>

          <button
            type="button"
            onClick={handleScroll}
            className="bg-blue-600 text-white rounded-full px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 hover:bg-blue-700 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 min-h-[50px] w-full sm:w-auto animate-on-scroll opacity-0 translate-y-4"
          >
            Explore Cars
          </button>
        </div>

        {/* Right content - Hero image with background */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Hero background */}
            <div className="absolute inset-1 z-1 animate-on-scroll opacity-0 scale-98">
              <Image
                src="/hero-bg.png"
                alt="Background pattern"
                fill
                className="object-cover rounded-2xl transition-transform duration-1000"
              />
            </div>
            
            {/* Hero image */}
            <div className="relative z-10 animate-on-scroll opacity-0 translate-x-4">
              <Image
                src="/hero.png"
                alt="Car rental showcase"
                width={600}
                height={500}
                className="w-full h-auto object-contain transition-transform duration-1000"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-5px); 
          }
        }
        
        @keyframes smoothFadeInUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes smoothFadeInRight {
          0% {
            opacity: 0;
            transform: translateX(16px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes smoothScaleIn {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-on-scroll {
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }

        /* Apply gentle float to hero image only */
        .relative.z-10.animate-on-scroll.animate-in img {
          animation: gentleFloat 4s ease-in-out infinite;
        }

        /* Specific animations with smoother curves */
        .animate-on-scroll.opacity-0.translate-y-4.animate-in {
          animation: smoothFadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-on-scroll.opacity-0.translate-x-4.animate-in {
          animation: smoothFadeInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-on-scroll.opacity-0.scale-98.animate-in {
          animation: smoothScaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Smooth hover transitions */
        button {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </section>
  );
};

export default Hero;