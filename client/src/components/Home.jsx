import React, { useState } from "react";
import { ShoppingCartIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import shoppingImage from '../assets/images/shopping.svg';
import shopNestLogo from '../assets/images/shopping-bag.png';
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

function Home() {
   const [showSignUp, setShowSignUp] = useState(false);
   const [showLogin, setShowLogin] = useState(false);
   const [activeModal, setActiveModal] = useState(null);

   return (
      <div className="bg-[#F3F4F6] min-h-screen mt-8">
         {/* Top Nav */}
         <div className="px-10 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
               <img src={shopNestLogo} alt="ShopNest logo" className="w-8 h-8" />
               <h1 className="text-xl md:text-3xl font-bold text-[#3B82F6] tracking-tight sm:text-2xl">
                  <span className="text-[#1F2937]">Shop</span>Nest
               </h1>
            </div>
            <div className="flex gap-5 text-[#1F2937] font-medium cursor-pointer">
               <Link to="/" className="hover:text-[#3B82F6]">Home</Link>
               <Link to="/about" className="hover:text-[#3B82F6]">About</Link>
            </div>
         </div>

         {/* Hero Section */}
         <div className="mt-5 flex flex-col-reverse md:flex-row items-center justify-center gap-10">
            {/* Left: Text Content */}
            <div className="text-center md:text-left max-w-md">
               <h2 className="text-4xl font-bold text-[#1F2937]">Welcome to ShopNest</h2>
               <p className="text-[#4B5563] mt-4">Your Everyday Essentials Delivered!</p>
               <p className="text-[#6B7280] mt-2">
                  Sign up to explore top gadgets, accessories, and exclusive deals!
               </p>

               <div className="mt-6 flex justify-center md:justify-start gap-4">
                  <button
                     onClick={() => setActiveModal('login')}
                     className="px-5 py-2 border border-[#3B82F6] text-[#3B82F6] rounded-md hover:bg-blue-100 font-medium"
                  >
                     Sign In
                  </button>
                  <button
                     onClick={() => setActiveModal('signup')}
                     className="px-5 py-2 bg-[#3B82F6] text-white rounded-md hover:bg-blue-600"
                  >
                     Get Started
                  </button>
                  {activeModal === "signup" && (
                     <SignUpModal
                        onClose={() => setActiveModal(null)}
                        onSwitch={() => setActiveModal("login")}
                     />
                  )}

                  {activeModal === "login" && (
                     <LoginModal
                        onClose={() => setActiveModal(null)}
                        onSwitch={() => setActiveModal("signup")}
                     />
                  )}

               </div>
            </div>

            {/* Right: Image */}
            <img
               src={shoppingImage}
               alt="Online Shopping"
               className="w-[300px] md:w-[400px]"
            />
         </div>

         {/* Features Section */}
         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
               <ShoppingCartIcon className="h-10 w-10 mx-auto text-[#3B82F6]" />
               <h3 className="font-semibold text-[#1F2937] mt-2">Easy Shopping</h3>
               <p className="text-sm text-[#6B7280]">
                  Browse and buy your favorite items quickly.
               </p>
            </div>
            <div className="text-center">
               <TruckIcon className="h-10 w-10 mx-auto text-[#3B82F6]" />
               <h3 className="font-semibold text-[#1F2937] mt-2">Fast Delivery</h3>
               <p className="text-sm text-[#6B7280]">
                  Get your orders delivered on time, every time.
               </p>
            </div>
            <div className="text-center">
               <ShieldCheckIcon className="h-10 w-10 mx-auto text-[#3B82F6]" />
               <h3 className="font-semibold text-[#1F2937] mt-2">Secure Checkout</h3>
               <p className="text-sm text-[#6B7280]">
                  Your payments are safe with end-to-end encryption.
               </p>
            </div>
         </div>

         {/* Modals */}
         {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
         {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

         <div>
            {/* Footer */}
            <footer className="mt-10 p-6 text-center text-sm text-gray-500">
               <div className="flex justify-center gap-4 mb-2">
                  <p>Terms</p>
                  <p>Privacy</p>
                  <p>Help</p>
               </div>
               <p>© {new Date().getFullYear()} ShopNest. All rights reserved.</p>
            </footer>
         </div>

      </div>
   );
}

export default Home;
