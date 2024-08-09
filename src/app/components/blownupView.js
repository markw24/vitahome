"use client";
import React, { useState, useEffect, useMemo } from "react";

// Detailed view modal component
function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{product.equipment_name}</h2>
        <p>
          <strong>Category:</strong> {product.category_name}
        </p>
        <p>
          <strong>Vendor:</strong> {product.vendor_name}
        </p>
        <p>
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {product.description || "No description available."}
        </p>
        <a
          href={product.order_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Buy Now
        </a>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function SequentialEquipmentDisplay({ equipment = [] }) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentEquipment, setCurrentEquipment] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Memoize the grouped categories
  const categories = useMemo(() => {
    return equipment.reduce((acc, item) => {
      if (!acc[item.category_name]) {
        acc[item.category_name] = [];
      }
      acc[item.category_name].push(item);
      return acc;
    }, {});
  }, [equipment]);

  const categoryNames = useMemo(() => Object.keys(categories), [categories]);

  useEffect(() => {
    setCurrentEquipment([]);

    if (categoryNames.length > 0) {
      const category = categoryNames[currentCategoryIndex];
      setCurrentCategory(category);
      setCurrentEquipment(categories[category] || []);
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
    <div className="text-black flex flex-col items-center">
      <h1 className="text-6xl font-bold p-4 mb-6">{currentCategory}</h1>

      <ul className="flex flex-col space-y-4 w-full max-w-3xl">
        {currentEquipment.map((item) => (
          <li
            key={item.equipment_id}
            className="border border-black p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleProductClick(item)}
          >
            <div className="text-lg font-semibold mb-2">
              {item.equipment_name}
            </div>
            <div className="text-sm text-gray-600 mb-2">{item.vendor_name}</div>
            <div className="text-lg font-medium mb-2">
              ${item.price.toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentCategoryIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentCategoryIndex === categoryNames.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Render the product detail modal if a product is selected */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default SequentialEquipmentDisplay;
