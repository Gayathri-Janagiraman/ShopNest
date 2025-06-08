import React from 'react';
import bannerImage from '../assets/images/herobanner.png';
function HeroBanner() {
  return (
    <div className="px-6 py-1 md:py-8">
      <div className="relative w-full ">
        <img src={bannerImage} alt="ShopNest Banner" className=" w-full h-40 md:h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-start ">
          <div className="text-white px-4 lg:px-10 md:px-10">
            <h1 className="text-sm hidden font-bold md:text-4xl lg:text-5xl md:block lg:block">
              Welcome Back to <br />
              ShopNest
            </h1>
            
            <h1 className="text-sm block font-bold md:hidden lg:hidden">
              Top Picks for You
            </h1>

            <p className="text-xs md:text-2xl lg:text-3xl lg:mt-4">
              Deals on electronics, <br className="block lg:hidden md:hidden" />
              clothing & more.
            </p>
            <a href="#trending-products">
            <button className="text-xs md:text-xl lg:text-2xl bg-blue-600 hover:bg-blue-700 rounded-lg p-1 mt-2 lg:mt-4">
              Shop Now
            </button>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
