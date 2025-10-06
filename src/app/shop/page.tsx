"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products/category/beauty");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?crop=entropy&cs=srgb&fm=jpg&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]">
      <div className="px-[344px] max-w-full">
        <div className="flex flex-wrap justify-between items-center py-6">
          <div className="text-base sm:text-lg italic">BFSM</div>
          <ul className="flex flex-wrap space-x-4 sm:space-x-8 text-sm sm:text-lg">
            <button onClick={goHome} className="hover:text-red-500 cursor-pointer">Home</button>
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
          {products.length > 0 ? (
            products.slice(0, 12).map((product) => (
              <div
                key={product.id}
                className="bg-transparent text-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 truncate">{product.title}</h3>
                  <p className="text-sm text-gray-400 italic mb-1">{product.brand}</p>
                  <p className="text-sm text-gray-300 mb-4">${product.price}</p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              Loading products...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
