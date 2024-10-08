"use client";
import Link from 'next/link';
import React from 'react';
import { FiHome } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-10 border-b-2 border-gray-200 items-center font-Montserrat">
      <img alt="main logo" src="vita-logo.svg"/>
      <div className="flex space-x-10">
        <div className="text-black text-[20px] font-bold flex items-center hover:text-[#1F5434]">
          <Link href="/" className="flex items-center space-x-2">
            <FiHome/>
            <span>Home</span>
          </Link>
        </div>
        <div className="text-black text-[20px] font-bold flex items-center hover:text-[#1F5434]">
          <Link href="/about" className="flex items-center space-x-2">
            <TiDocumentText/>
            <span>About us</span>
          </Link>
        </div>
        <div className="text-black text-[20px] font-bold flex items-center hover:text-[#1F5434]">
          <Link href="/products" className="flex items-center space-x-2">
            <FaRegArrowAltCircleRight />
            <span>Products</span>
          </Link>
        </div>
        <div className="text-black text-[20px] font-bold flex items-center pr-10 hover:text-[#1F5434]">
          <Link href="/cart" className="flex items-center space-x-2">
            <FiShoppingCart />
            <span>Shopping Cart</span>
          </Link>
        </div>
        <div className="bg-white py-3 px-8 rounded-full max-w-l border-2 border-[#1F5434] hover:bg-[#1F5434] hover:bg-opacity-75 group">
          <Link href="/contact">
            <span className="text-[#1F5434] group-hover:text-white">Contact Us</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
