"use client";
import React, { useState } from "react";

function SequentialEquipmentDisplay({ equipment }) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Group equipment by category
  const categories = equipment.reduce((acc, item) => {
    if (!acc[item.category_name]) {
      acc[item.category_name] = [];
    }
    acc[item.category_name].push(item);
    return acc;
  }, {});

  const categoryNames = Object.keys(categories);

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

  const currentCategory = categoryNames[currentCategoryIndex];
  const currentEquipment = categories[currentCategory];

  return (
    <div className="text-black flex flex-col items-center">
      <h1 className="text-6xl font-bold p-4 mb-6">{currentCategory}</h1>
      <ul className="flex flex-col space-y-4 w-full max-w-3xl">
        {currentEquipment.map((item) => (
          <li
            key={item.equipment_id}
            className="border border-black p-4 rounded-lg shadow-md"
          >
            <div className="text-lg font-semibold mb-2">
              {item.equipment_name}
            </div>
            <div className="text-sm text-gray-600 mb-2">{item.vendor_name}</div>
            <div className="text-lg font-medium mb-2">${item.price}</div>
            <div>
              <a
                href={item.order_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Buy Now
              </a>
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
    </div>
  );
}

export default SequentialEquipmentDisplay;
