"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const Home = () => {
    router.push("/");
  };
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIwfHxibGFjayUyMGdyYWRpZW50fGVufDB8fHx8MTc1OTE1MjUzOXww&ixlib=rb-4.1.0&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]">

      <div className="px-[344px] max-w-full">

        <div className="flex flex-wrap justify-between items-center py-6">
          <div className="text-base sm:text-lg italic">BFSM</div>
          <ul className="flex flex-wrap space-x-4 sm:space-x-8 text-sm sm:text-lg">
            <button onClick={Home} className="hover:text-red-500 cursor-pointer">Home</button>
            <button className="hover:text-red-500 cursor-pointer">Shop</button>
            <button className="hover:text-red-500 cursor-pointer">About</button>
            <button className="hover:text-red-500 cursor-pointer">Contact</button>
            <button className="relative cursor-pointer">
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] sm:text-xs w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </ul>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">Shop</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="bg-transparent text-black rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDZ8fGJlYXV0eSUyMHByb2R1Y3R8ZW58MHx8fHwxNzU5MTU3Nzg5fDA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">Cocooil body oil</h3>
              <p className="text-sm text-gray-300 mb-4">$199.00</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-transparent text-black rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIzfHx3YXRjaHxlbnwwfHx8fDE3NTkxMjAzNjl8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-white">Handwatch (wooden)</h3>
              <p className="text-sm text-gray-300 mb-4">$299.00</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1597931752949-98c74b5b159f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDExfHxiZWF1dHklMjBwcm9kdWN0fGVufDB8fHx8MTc1OTE1Nzc4OXww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt="Product 3"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Very White oil</h3>
              <p className="text-sm text-gray-300 mb-4">$99.00</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

          <div className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1695972235544-0bb3b78bcece?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDI0fHxiZWF1dHklMjBwcm9kdWN0fGVufDB8fHx8MTc1OTE1Nzc4OXww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt="Product 3"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Facebk Cleanser</h3>
              <p className="text-sm text-gray-300 mb-4">$149.00</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDMzfHxiZWF1dHklMjBwcm9kdWN0fGVufDB8fHx8MTc1OTE1NzgzNHww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt="Product 3"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Pink set for face</h3>
              <p className="text-sm text-gray-300 mb-4">$549.00</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>

          <div className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1677176513059-0ad47dcfea01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDQ5fHxiZWF1dHklMjBwcm9kdWN0fGVufDB8fHx8MTc1OTE1NzgzNHww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt="Product 3"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Pink set for face</h3>
              <p className="text-sm text-gray-300 mb-4">$69.00</p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
