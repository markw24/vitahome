// /components/Checklist.js
import React, { useState } from 'react';

const categories = [
  {
    title: 'Walkers/Wheelchairs',
    items: ['Four legged walker', 'Two wheeled walker', 'Three wheeled walker', 'Rollator', 'Other'],
  },
  {
    title: 'Bathroom Aids & Safety Equipment',
    items: ['Shower chair', 'Grab bar', 'Toilet safety frame', 'Transfer bench', 'Other'],
  },
  {
    title: 'Medical Bed Safety & Assisting Rails',
    items: ['Bed rail', 'Bed ladder', 'Overbed table', 'Trapeze bar', 'Other'],
  },
  {
    title: 'Fall Detection Technologies',
    items: ['Fall mat', 'Motion sensor', 'Wearable alert', 'Smart home integration', 'Other'],
  },
];

const Checklist = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (category, item) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: !prevState[category]?.[item],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit the selected items to the backend
    await fetch('/api/saveSelections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedItems),
    });
    alert('Selections saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-center text-[40px] font-Playfair w-full font-bold text-[#1F5434]">Please Check Off the Relevant Items</h2>
      <div className="flex flex-wrap justify-between w-full">
        {categories.map((category) => (
          <div key={category.title} className="category bg-white p-6 rounded-lg shadow-lg flex-[0_0_calc(50%-12px)] mb-6">
            <h3 className="bg-[#1F5434] text-white text-[20px] p-3 rounded-t-lg text-center">{category.title}</h3>
            <div className="items mt-4">
              {category.items.map(item => (
                <div key={item} className="item flex items-center space-x-2 py-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-[#1F5434]"
                    checked={selectedItems[category.title]?.[item] || false}
                    onChange={() => handleCheckboxChange(category.title, item)}
                  />
                  <label className="ml-2 text-gray-700">{item}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="submit" className="bg-[#1F5434] text-white text-[20px] p-3 rounded-lg w-full hover:bg-opacity-75 transition">Submit</button>
    </form>
  );
};

export default Checklist;
