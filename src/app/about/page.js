"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Recommendations() {
  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col py-10 px-20 items-center">
          <div className="flex flex-col items-center text-center pb-12">
            <h1 className="font-bold text-[#1F5434] text-[50px] font-Playfair pb-10">
              About Us
            </h1>
            <h2 className="text-[#808080] font-Montserrat text-[20px]">
              Our team identified a need for anyone looking to gain an
              understanding of what they might need to age at home safely.
            </h2>
            <p className="container text-lg text-[#808080] text-[20px] pt-8 font-Montserrat">
              Our mission is to streamline the process of improving a home for
              aging. Supplementing traditional professional recommendations and
              aiding those who are simply looking to research for themselves.
            </p>
          </div>

          {/* Top Section */}
          <div className="flex flex-col items-center gap-4 p-8">
            <div className="flex justify-between w-full max-w-md md:max-w-lg lg:max-w-xl items-center">
              <div className="bg-white border border-[#f0f0f0] text-[#1F5434] py-4 px-8 rounded-lg text-center shadow-md flex-1 mr-4">
                Occupational Therapist Recommendations
              </div>
              <div className="bg-white border border-[#f0f0f0] text-[#1F5434] py-4 px-8 rounded-lg text-center shadow-md flex-1 ml-4">
                People looking to browse the options
              </div>
            </div>
            <FaArrowDownLong className="text-black text-4xl mt-4" />
            <div className="bg-[#1F5434] border-[#f0f0f0] text-white font-bold py-6 px-10 rounded-lg text-center shadow-md">
              Vita Home
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-4">
            <FaArrowDownLong className="text-black text-4xl" />
            <div className="flex flex-wrap justify-center w-full max-w-5xl gap-4 ml-4">
              <div className="bg-white border border-[#f0f0f0] text-[#1F5434] py-4 px-8 mr-4 rounded-lg text-center shadow-md flex-1 min-w-[220px]">
                Local Contractors
              </div>
              <div className="bg-white border border-[#f0f0f0] text-[#1F5434] py-4 px-8 mr-4 rounded-lg text-center shadow-md flex-1 min-w-[220px]">
                Online Marketplaces
              </div>
              <div className="bg-white border border-[#f0f0f0] text-[#1F5434] py-4 px-8 mr-4 rounded-lg text-center shadow-md flex-1 min-w-[220px]">
                Local Suppliers
              </div>
              <div className="bg-white border border-[#f0f0f0] text-[#1F5434] py-4 px-8 mr-4 rounded-lg text-center shadow-md flex-1 min-w-[220px]">
                Funding Programs
              </div>
            </div>
          </div>

          <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="col-span-1 flex flex-col h-full">
              <div className="bg-[#1F5434] text-white font-bold py-4 px-8 rounded-t-lg text-center">
                Local Suppliers
              </div>
              <div className="bg-gray-200 py-6 px-8 rounded-b-lg flex-1">
                <ul className="list-disc pl-5 text-[#1F5434]">
                  <li>Motion</li>
                  <li>Shoppers Health wise</li>
                  <li>Berg Access and Mobility</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex flex-col h-full">
              <div className="bg-[#1F5434] text-white font-bold py-4 px-8 rounded-t-lg text-center">
                Online Marketplaces
              </div>
              <div className="bg-gray-200 py-6 px-8 rounded-b-lg flex-1">
                <ul className="list-disc pl-5 text-[#1F5434]">
                  <li>Amazon</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex flex-col h-full">
              <div className="bg-[#1F5434] text-white font-bold py-4 px-8 rounded-t-lg text-center">
                Local Contractors
              </div>
              <div className="bg-gray-200 py-6 px-8 rounded-b-lg flex-1">
                <ul className="list-disc pl-5 text-[#1F5434]">
                  <li>Location Based</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 flex flex-col h-full">
              <div className="bg-[#1F5434] text-white font-bold py-4 px-8 rounded-t-lg text-center">
                Funding Programs
              </div>
              <div className="bg-gray-200 py-6 px-8 rounded-b-lg flex-1">
                <ul className="list-disc pl-5 text-[#1F5434]">
                  <li>Governmental funding</li>
                  <li>March of Dimes</li>
                  <li>Lions Club</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
