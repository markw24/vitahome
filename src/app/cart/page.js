'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useState } from "react";
import BiggerCard from "../components/BiggerCard";
import Link from "next/link";

function CartItem({ title, description, price, quantity, image, product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-4 hover:shadow-lg transition-shadow duration-300"
    >
      <img src={image} alt={title} className="w-full md:w-24 h-24 object-cover rounded-lg" />
      <div className="flex flex-col flex-1">
        <h2 className="font-bold text-[#1F5434] text-lg">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-[#1F5434]">${price}</p>
          <div className="flex items-center">
            <button className="bg-[#1F5434] text-white px-3 py-1 rounded-lg">-</button>
            <span className="mx-4">{quantity}</span>
            <button className="bg-[#1F5434] text-white px-3 py-1 rounded-lg">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Mock Data
  const products = [
    {
      title: "GBC 1091 - 1.25”",
      description: "Diameter Oil Rubbed Bronze (Light)",
      price: "55.00 - 95.43",
      quantity: 1,
      image: "https://via.placeholder.com/150",
      brand: "Grab Bars Canada",
      name: "GBC 1091 - 1.25”",
    },
    {
      title: "Electric Wheelchair",
      description: "All Star Wheelchairs",
      price: "1,649.99",
      quantity: 1,
      image: "https://via.placeholder.com/150",
      brand: "All Star",
      name: "Electric Wheelchair",
    },
    {
      title: "Fall Detection Device",
      description: "Advanced Detection Technology",
      price: "299.99",
      quantity: 1,
      image: "https://via.placeholder.com/150",
      brand: "SafetyTech",
      name: "Fall Detection Device",
    },
  ];

  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col py-10 px-20 items-center">
          <h1 className="font-bold text-[#1F5434] text-[50px] font-Playfair pb-10">Your Cart</h1>

          <div className="w-full max-w-5xl space-y-6">
            {products.map((product, index) => (
              <div key={index}>
                <h2 className="bg-[#1F5434] text-white text-lg font-bold py-2 px-4 rounded-t-lg">
                  {product.title}
                </h2>
                <div className="bg-gray-100 p-6 rounded-b-lg">
                  <CartItem
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    quantity={product.quantity}
                    image={product.image}
                    product={product}
                    onClick={() => handleCardClick(product)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full max-w-5xl mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#1F5434] text-2xl">Total: $5,004.96</p>
              <button className="bg-[#1F5434] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#17422a] transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      {selectedProduct && (
        <BiggerCard product={selectedProduct} isOpen={true} onClose={closeModal} />
      )}
    </>
  );
}