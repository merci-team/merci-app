import React, { useState } from "react";
import menuItems from "./Menu-Items";
import Category from "./Category";

function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(menuItems)[0]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <header className="container mx-auto mb-10 text-center">
        <div className="backdrop-blur-md bg-white/30 border border-[#203732]/30 rounded-lg p-6 shadow-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#203732]">
            Merci Coffee and Pastries
          </h1>
          <p className="text-gray-600 mt-2 text-lg sm:text-xl">
            Explore our delightful menu
          </p>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-4 sm:p-6">
        <div className="flex flex-wrap justify-center mb-6">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 mx-2 mb-2 text-lg font-semibold rounded-lg ${
                activeTab === category
                  ? "bg-[#203732] text-white"
                  : "bg-gray-200 text-[#203732]"
              } transition duration-300 hover:shadow-lg`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <Category category={activeTab} items={menuItems[activeTab]} />
      </main>

      <footer className="container mx-auto text-center py-6">
        <div className="backdrop-blur-md bg-white/30 border border-[#203732]/30 rounded-lg p-4 shadow-md">
          <p className="text-[#203732] font-semibold text-lg">
            Merci Coffee and Pastries © 2024
          </p>
          <p className="text-[#203732] text-sm">
            Made with ☕ and 🥐 by our team
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
