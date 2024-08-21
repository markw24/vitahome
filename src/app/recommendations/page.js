'use client';
import { useSearchParams } from 'next/navigation'; // Use this hook for query parameters
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function RecommendationsPage() {
  const searchParams = useSearchParams(); // Get the search params from the URL
  const score = searchParams.get('score'); // Retrieve the score from the search params

  const recommendations = [
    {
      category: 'Grab Bars',
      items: [
        { name: 'GBC 109.1 - 1.25"', description: 'Diameter Oil Rubbed Bronze (Light)', image: '/wheelchair.svg' },
      ],
    },
    {
      category: 'Wheelchairs',
      items: [
        { name: 'Electric Wheelchair', description: 'All Star Wheelchairs', image: '/wheelchair.svg', price: '$1,649.99' },
      ],
    },
    {
      category: 'Non-slip Bath Mats',
      items: [
        { name: 'Gorilla Grip Bath Mat', description: 'Gorilla Commerce', image: '/wheelchair.svg', price: '20.99' },
      ],
    },
    {
      category: 'Night Lights for walkways',
      items: [
        { name: 'LOHAS Plug In Night Light', description: 'LOHAS-LED', image: '/wheelchair.svg', price: '24.99' },
      ],
    },
  ];

  return (
    <>
      <main className="bg-white min-h-screen">
        <Navbar />
        <div className="flex flex-col py-10 px-20 items-center">
          <h1 className="font-bold text-[#1F5434] text-[40px] font-Playfair pb-10">Your Home Safety Score:</h1>
          <div className="flex flex-row items-center justify-center mb-10">
            <div className="bg-[#1F5434] text-white text-[100px] font-bold p-8 rounded-lg">
              {score}
            </div>
          </div>
          <p className="text-[#808080] text-center mb-10 italic">
            This score is based on your responses to the questions: +1 point for taking precautions and -1 for unmitigated hazards.
          </p>
          <h2 className="font-bold text-[#1F5434] text-[30px] mb-8">Your Recommendations:</h2>

          {/* Recommendations Section */}
          {recommendations.map((rec, index) => (
            <div key={index} className="w-full max-w-4xl mb-10">
              <h3 className="bg-[#1F5434] text-white text-[20px] font-semibold p-3 rounded-t-lg">{rec.category}</h3>
              <div className="bg-gray-100 p-4 rounded-b-lg shadow-md flex text-center text-black">
                {rec.items.map((item, idx) => (
                  <div key={idx} className="flex flex-row mb-4">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                      {item.price && <p className="text-gray-800 font-bold">{item.price}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16">
            <p className="text-[#1F5434] text-[20px] mb-4 font-Montserrat">
              Want to keep browsing? Follow this link below to look at our entire catalogue of items and vendors.
            </p>
            <a href="/products" className="text-[#1F5434] text-lg font-semibold border-2 border-[#1F5434] px-4 py-2 rounded-lg hover:bg-[#1F5434] hover:text-white">
              Products
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
