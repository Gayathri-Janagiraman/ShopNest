import React from "react";
import { Link } from "react-router-dom";
import shopNestLogo from '../assets/images/shopping-bag.png';
import Footer from "./Footer";

function About() {
    return (
        <div className="bg-[#F3F4F6] min-h-screen px-6 py-8">
            {/* Top Nav */}
            <div className="px-5 py-2 flex justify-between items-center">
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

            {/* About Section */}
            <section className="flex-grow px-6 sm:px-12 py-16 bg-gray-100 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">About ShopNest</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
                    ShopNest is your go-to destination for everyday essentials — from gadgets and accessories to home needs.
                    We're focused on making shopping easier, faster, and safer for everyone.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About;
