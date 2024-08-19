'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center py-10 px-20">
          <h1 className="text-[#1F5434] font-bold font-Playfair text-[40px]">Contact Us</h1>
          <h1 className="text-[#808080] font-Montserrat text-[20px]">
            Any question or remarks? Just write us a message!
          </h1>
        </div>
        
        <div className="flex flex-wrap justify-center items-start p-10">
          {/* Left Side - Contact Information */}
          <div className="bg-[#1F5434] text-white w-full md:w-1/2 p-10 rounded-md">
            <h2 className="text-[24px] font-bold mb-5">Contact Information</h2>
            <p className="mb-5">Say something to start a live chat!</p>
            <ul>
              <li className="flex items-center mb-4">
                <span className="inline-block w-6 h-6 bg-white text-[#0E2A47] rounded-full mr-3 text-center">📞</span>
                +1012 3456 789
              </li>
              <li className="flex items-center mb-4">
                <span className="inline-block w-6 h-6 bg-white text-[#0E2A47] rounded-full mr-3 text-center">📧</span>
                demo@gmail.com
              </li>
              <li className="flex items-center mb-4">
                <span className="inline-block w-6 h-6 bg-white text-[#0E2A47] rounded-full mr-3 text-center">📍</span>
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </li>
            </ul>
            <div className="flex space-x-3 mt-5">
              <a href="#" className="text-2xl">🐦</a>
              <a href="#" className="text-2xl">📸</a>
              <a href="#" className="text-2xl">🎮</a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 pb-10 px-10">
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-3 rounded-md text-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-3 rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-3 w-full rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border border-gray-300 p-3 w-full rounded-md text-black"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Write your message.."
                  className="border border-gray-300 p-3 w-full rounded-md h-32 text-black"
                ></textarea>
              </div>
              <button className="bg-[#1F5434] text-white p-3 rounded-md w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
