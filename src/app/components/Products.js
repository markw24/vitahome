import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState, useRef, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import BiggerCard from './BiggerCard'

const categories = [
  {
    title: 'Wheelchairs',
    products: [
      {
        name: 'Electric Wheelchair',
        brand: 'All Star Wheelchairs',
        price: '$1,649.99',
        image: 'wheelchair.svg',
      },
      {
        name: 'Light Weight Wheelchair',
        brand: 'LIVINGbasics',
        price: '$248.98',
        image: 'wheelchair.svg',
      },
    ],
  },
  {
    title: 'Fall Detection Technologies',
    products: [
      {
        name: 'Fall Mat',
        brand: 'SafeTech',
        price: '$149.99',
        image: 'wheelchair.svg',
      },
    ],
  },
  {
    title: 'Bathroom and Safety Equipment',
    products: [
      {
        name: 'Shower Chair',
        brand: 'ComfortLiving',
        price: '$89.99',
        image: 'wheelchair.svg',
      },
    ],
  },
];

const ProductPage = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    setSelectedCategoryIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    setSelectedCategoryIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
    sliderRef.current.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    swipe: false,
    initialSlide: selectedCategoryIndex,
    beforeChange: (current, next) => setSelectedCategoryIndex(next),
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedCategoryIndex);
    }
  }, [selectedCategoryIndex]);

  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          <FaArrowAltCircleLeft />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="text-center px-2" tabIndex={-1}>
              <h2 className={`text-lg font-bold ${index === selectedCategoryIndex ? 'text-[#1F5434] text-3xl' : 'text-black'}`}>
                {category.title}
              </h2>
            </div>
          ))}
        </Slider>
        <button
          onClick={handleNext}
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories[selectedCategoryIndex].products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-black">{product.brand}</p>
            <p className="text-[#1F5434] font-bold">{product.price}</p>
            <button className="mt-4 w-full bg-[#1F5434] hover:bg-green-600 text-white py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <BiggerCard
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductPage;
