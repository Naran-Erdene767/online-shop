"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const Shop = () => {
    router.push("/shop");
  };
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1671159593357-ee577a598f71?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D')]">

      <div className="px-[344px] max-w-full">

        <div className="flex flex-wrap justify-between items-center py-6">
          <div className="text-base sm:text-lg italic">BFSM</div>
          <ul className="flex flex-wrap space-x-4 sm:space-x-8 text-sm sm:text-lg">
            <button className="hover:text-red-500 cursor-pointer">Home</button>
            <button onClick={Shop} className="hover:text-red-500 cursor-pointer">Shop</button>
            <button className="hover:text-red-500 cursor-pointer">About</button>
            <button className="hover:text-red-500 cursor-pointer">Contact</button>
            <button className="relative cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <p className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] sm:text-xs w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center rounded-full">
                0
              </p>
            </button>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row mt-24 sm:mt-36 gap-6 relative">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">
            Black Friday
          </div>
          <div className="absolute top-24 sm:top-32 right-4 md:right-32 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-red-500 flex items-center justify-center text-white text-sm sm:text-lg md:text-xl font-semibold text-center">
            50% <br /> off
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-12 gap-6">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">Sale</div>
          <div className="flex space-x-4 mt-4 sm:mt-12 ml-0 sm:ml-16 text-base sm:text-xl md:text-2xl">
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl sm:text-3xl">90</span>
              <span className="text-xs">DAYS</span>
            </div>
            <span className="text-2xl sm:text-3xl">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl sm:text-3xl">24</span>
              <span className="text-xs">HOURS</span>
            </div>
            <span className="text-2xl sm:text-3xl">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl sm:text-3xl">00</span>
              <span className="text-xs">MINUTES</span>
            </div>
            <span className="text-2xl sm:text-3xl">:</span>
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl sm:text-3xl">00</span>
              <span className="text-xs">SECONDS</span>
            </div>
          </div>
        </div>

        <button className="w-48 bg-red-500 hover:bg-red-600 transition-colors text-white font-semibold py-3 rounded mt-6 text-sm sm:text-base">
          Discover Deals
        </button>
        <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Flash Deals: Limited Time, Massive Savings!
            </h1>
            <h2 className="text-lg sm:text-xl font-medium mb-4">
              Hurry, these deals won’t last long!
            </h2>
            <p className="text-sm sm:text-base mb-6">
              Our hottest items are flying off the shelves. Grab yours before it’s too late!
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-[24px] py-3 rounded">
              Shop now
            </button>
          </div>

          <div className="w-full max-w-sm">
            <img
              src="https://johnnyslicks.com/cdn/shop/products/beardbundlealpha.png?v=1734072377"
              alt="Alpha Beard Products"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="h-1 w-10 bg-white mx-auto mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
            Stay Ahead of the Deals – Sign Up <br />
            for Exclusive Black Friday Updates!
          </h1>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-auto px-4 py-2 border-b-2 border-gray-300 bg-black text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-row justify-around">
          <div className="w-48 h-36 bg-white text-black flex items-center justify-center text-center text-2xl rounded-2xl">
            55% <br /> OFF
          </div>

          <div className="w-80 h-60 ml-12 rounded-2xl bg-auto bg-center bg-[url('https://images.unsplash.com/photo-1625753783470-ec2ab4efeeec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDEyfHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTkwNjQ5MTl8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]"></div>
          <div className="w-80 h-60 ml-12 rounded-2xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1564594326930-17381130fd2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDE2fHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTkwNjQ5MTl8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]"></div>
          <div className="w-48 h-60 ml-12 rounded-2xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1556227834-09f1de7a7d14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIzfHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTkwNjQ5MTl8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]"></div>
        </div>
        <div className="flex flex-row justify-around mt-12">
          <div className="w-80 h-60 rounded-2xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535415493710-bdf0b2dc725e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDY0fHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTkxMzUzMzl8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]"></div>
          <div className="w-48 h-60 ml-12 rounded-2xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDQ3fHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTkxMzUzMzd8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]"></div>
          <div className="w-48 h-36 text-black flex items-center justify-center text-center text-2xl rounded-2xl ml-12 bg-red-400">
            Shop <br /> Now
          </div>
          <div className="w-80 h-60 ml-12 rounded-2xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDc0fHxiZWF1dHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3NTkxMzUzMzl8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]"></div>
        </div>

        <div className="max-w-6xl w-full text-center mt-36">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">
            Gear Up for the Ultimate Black Friday Savings!
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="relative rounded-xl overflow-hidden w-full sm:w-1/2 h-72 sm:h-96 cursor-pointer">
              <div className="absolute inset-0 bg-black flex flex-col justify-center items-center px-4 text-center space-y-4 rounded-xl bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDd8fHdhdGNofGVufDB8fHx8MTc1OTEyMDM2OXww&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]">
                <span className="text-sm sm:text-base text-gray-300">Up to 65% Off</span>
                <h2 className="text-white font-semibold text-lg sm:text-xl">
                  Unlock Exclusive Black Friday Deals for Men!
                </h2>
                <button className="bg-red-500 hover:bg-red-600 transition-colors px-6 py-2 rounded text-white text-sm sm:text-base">
                  Shop now
                </button>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden w-full sm:w-1/2 h-72 sm:h-96 cursor-pointer">
              <div className="absolute inset-0 bg-black flex flex-col justify-center items-center px-4 text-center space-y-4 rounded-xl bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1677174198062-98e9a95ba5bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDEwNXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHx8fDE3NTkxNTc4Mzd8MA&ixlib=rb-4.1.0&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450')]">
                <span className="text-sm sm:text-base text-gray-300">Up to 65% Off</span>
                <h2 className="text-white font-semibold text-lg sm:text-xl">
                  Unmissable Black Friday Deals for Women!
                </h2>
                <button className="bg-red-500 hover:bg-red-600 transition-colors px-6 py-2 rounded text-white text-sm sm:text-base">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 mt-36">
          <div className="w-16 h-1 bg-white mx-auto mb-8 rounded"></div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Don’t Miss Out – Shop Black Friday Deals Now!
          </h2>
          <p className="text-sm sm:text-base mb-8">
            Unlock exclusive savings before time runs out. Your biggest discounts are just a click away!
          </p>
          <button className="bg-red-500 hover:bg-red-600 transition-colors px-10 py-3 rounded text-white font-semibold text-base">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}