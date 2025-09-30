"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
        const data = await res.json();
        setProducts(data.slice(0, 6));
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIwfHxibGFjayUyMGdyYWRpZW50fGVufDB8fHx8MTc1OTE1MjUzOXww&ixlib=rb-4.1.0&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]">
      <div className="px-[344px] max-w-full">
        <div className="flex flex-wrap justify-between items-center py-6">
          <div className="text-base sm:text-lg italic">BFSM</div>
          <ul className="flex flex-wrap space-x-4 sm:space-x-8 text-sm sm:text-lg">
            <button onClick={handleHome} className="hover:text-red-500 cursor-pointer">Home</button>
            <button className="hover:text-red-500 cursor-pointer">Shop</button>
            <button className="hover:text-red-500 cursor-pointer">About</button>
            <button className="hover:text-red-500 cursor-pointer">Contact</button>
            <button className="relative cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </ul>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Shop</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.image_link}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-300 mb-4">${product.price}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
