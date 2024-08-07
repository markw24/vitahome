"use client";
import Link from 'next/link';
import React from 'react';
import { FiHome } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-10 border-b-2 border-gray-200 items-center font-Montserrat">
      <img alt="main logo" src="vita-logo.svg"/>
      <div className="flex space-x-10">
        <div className="text-[#1F5434] text-[20px] font-bold flex items-center">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <FiHome/>
            <span>Home</span>
          </Link>
        </div>
        <div className="text-black text-[20px] font-bold flex items-center">
          <Link href="/about" className="flex items-center space-x-2">
            <TiDocumentText className='flex '/>
            <span>About us</span>
          </Link>
        </div>
        <div className="text-black text-[20px] font-bold flex items-center">
          <Link href="/products" className="flex items-center space-x-2">
            <FaRegArrowAltCircleRight />
            <span>Products</span>
          </Link>
        </div>
        <div className="text-black text-[20px] font-bold flex items-center pr-10">
          <Link href="/contact" className="flex items-center space-x-2">
            <IoPersonOutline />
            <span>Contact Us</span>
          </Link>
        </div>
        <div className='bg-white py-3 px-8 rounded-full max-w-l border-2 border-[#1F5434]'>
            <Link href='/contact'>
                <button className='text-[#1F5434]'>Contact Us</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
