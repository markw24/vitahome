"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import React, { useState, useEffect, useMemo } from "react";

function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {product.product_name}
        </h2>
        <img
          src="wheelchair_mark.svg"
          alt="product image"
          className="w-full h-48 object-contain mb-4"
        />
        <p className="text-xl font-semibold text-center mb-4">
          ${product.product_price}
        </p>
        <p className="mb-4 text-center text-black">
          {product.product_description}
        </p>
        <button className="mt-4 w-full bg-[#1F5434] hover:bg-green-600 text-white py-2 rounded">
          Add to Cart
        </button>
        <button className="mt-2 w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded">
          Reviews
        </button>
      </div>
    </div>
  );
}

function SequentialEquipmentDisplay({ equipment }) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentEquipment, setCurrentEquipment] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Memoize the grouped categories to prevent recalculating on every render
  const categories = useMemo(() => {
    return equipment.reduce((acc, item) => {
      if (!acc[item.category_name]) {
        acc[item.category_name] = [];
      }
      acc[item.category_name].push(item);
      return acc;
    }, {});
  }, [equipment]);

  // Memoize the category names to prevent recalculating on every render
  const categoryNames = useMemo(() => Object.keys(categories), [categories]);

  useEffect(() => {
    // Clear current equipment list to prevent carryover
    setCurrentEquipment([]);

    // Update current category and equipment when currentCategoryIndex changes
    if (categoryNames.length > 0) {
      const category = categoryNames[currentCategoryIndex];
      setCurrentCategory(category);
      // Use a timeout to simulate async state change and ensure the equipment is updated cleanly
      setTimeout(() => {
        setCurrentEquipment(categories[category] || []);
      }, 0);
    }
  }, [currentCategoryIndex, categories, categoryNames]);

  const handleNext = () => {
    if (currentCategoryIndex < categoryNames.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={handlePrevious}
          disabled={currentCategoryIndex === 0}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          <span className="sr-only">Previous</span>
          <FaArrowAltCircleLeft />
        </button>

        <h1 className="text-3xl text-black font-semibold text-center flex-grow">
          {currentCategory}
        </h1>

        <button
          onClick={handleNext}
          disabled={currentCategoryIndex === categoryNames.length - 1}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 disabled:opacity-50"
        >
          <span className="sr-only">Next</span>
          <FaArrowAltCircleRight />
        </button>
      </div>

      <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentEquipment.map((item) => (
          <div
            key={item.product_name}
            className="border p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleProductClick(item)}
          >
            <img
              src="wheelchair_mark.svg"
              alt={item.product_name}
              className="w-full h-48 object-contain"
            />
            <h3 className="text-lg font-semibold mt-4">{item.product_name}</h3>
            <p className="text-gray-700">{item.vendor_name}</p>
            <p className="text-green-600 font-bold mt-2">
              ${item.product_price}
            </p>
            <button className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-black bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-lg font-bold mb-2">Raw Data from MySQL:</h2>
        <pre className="whitespace-pre-wrap break-all">
          {JSON.stringify(equipment, null, 2)}
        </pre>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default SequentialEquipmentDisplay;
