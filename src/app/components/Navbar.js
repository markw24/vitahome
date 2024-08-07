import Link from 'next/link';
import React from 'react';
import { FiHome } from "react-icons/fi";
import { CgArrowRightO } from "react-icons/cg";
import { TiDocumentText } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <div className="flex flex-row justify-between px-20 space-x-10 p-5 border-[#f0f0f0] border-y-2">
            <img alt="main logo" src="main-dog.svg" />
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/dashboard" className="flex items-center space-x-2">
                    <FiHome className="flex items-center space-x-2" />
                    <h1>Home</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/applications" className="flex items-center space-x-2">
                    <CgArrowRightO className="flex items-center space-x-2" />
                    <h1>About Us</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/documents" className="flex items-center space-x-2">
                    <TiDocumentText className="flex items-center space-x-2" />
                    <h1>Products</h1>
                </Link>
            </div>
            <div className="text-black text-[20px] font-spaceGrotesk font-bold flex items-center">
                <Link href="/profile" className="flex items-center space-x-2">
                    <IoPersonOutline className="flex items-center space-x-2" />
                    <h1>Contact us</h1>
                </Link>
            </div>
        </div>  
    </>
  );
};

export default Navbar;
