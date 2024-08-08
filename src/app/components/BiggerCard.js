import React, { useEffect, useRef } from 'react';

const BiggerCard = ({ product, isOpen, onClose }) => {
  const modalRef = useRef();

  // Close the modal if clicked outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-Montserrat">
      <div ref={modalRef} className="bg-white p-8 rounded-lg max-w-lg w-full relative text-black text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
        <h2 className="text-2xl font-bold pb-4">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-48 object-contain pb-4" />
        <p className="text-lg pb-4">{product.brand}</p>
        <p className="text-lg pb-4">{product.price}</p>
        <p className="text-lg">More detailed information about the product goes here...</p>
        <button className="mt-4 w-full bg-[#1F5434] hover:bg-green-600 text-white py-2 rounded">Add to Cart</button>
        <button className="mt-4 w-full bg-gray-300 hover:bg-green-600 hover:text-white text-black py-2 rounded">Reviews</button>
      </div>
    </div>
  );
};

export default BiggerCard;
