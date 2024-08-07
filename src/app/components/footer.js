"use client"; // Ensure this is treated as span client component

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#a8bfa3] overflow-hidden pt-32">
      <div className="footer-shape absolute top-0 left-0 w-full h-[200px] bg-[#a8bfa3] rounded-t-full"></div>
      <div className="footer-content relative z-10 p-10">
        <div className="flex justify-between items-center">
          <img src="vita-logo.svg" alt="Vita Home Logo" className="h-12" />
          <nav className="flex space-x-4">
            <Link href="#"><span className="text-black hover:text-gray-700">Home</span></Link>
            <Link href="#"><span className="text-black hover:text-gray-700">About Us</span></Link>
            <Link href="#"><span className="text-black hover:text-gray-700">Pricing</span></Link>
            <Link href="#"><span className="text-black hover:text-gray-700">Contact Us</span></Link>
          </nav>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <form className="flex space-x-2">
            <input type="email" placeholder="Enter your email" className="p-2 border rounded-full" />
            <button type="submit" className="bg-[#1F5434] text-white px-4 py-2 rounded-full">Subscribe</button>
          </form>
          <p className="text-sm text-gray-600">
            By subscribing you agree to with our <Link href="#"><span className="underline">Privacy Policy</span></Link>
          </p>
        </div>
        <div className="mt-6 flex justify-between items-center border-t pt-4">
          <nav className="flex space-x-4">
            <Link href="#"><span className="text-sm text-gray-600 hover:text-gray-800">Privacy Policy</span></Link>
            <Link href="#"><span className="text-sm text-gray-600 hover:text-gray-800">Terms of Service</span></Link>
            <Link href="#"><span className="text-sm text-gray-600 hover:text-gray-800">Cookies Settings</span></Link>
          </nav>
          <p className="text-sm text-gray-600">
            &copy; 2024 Vita Home. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
