import React from "react";
import menuItems from "./Menu-Items"; // Importing the menuItems object
import Category from "./Category"; // Importing the Category component

function App() {
  return (
    <div className="App">
      {/* Header with primary color */}
      <header className="bg-[#203732] p-5">
        <h1 className="text-3xl font-bold text-white text-center">
          Merci Coffee and Pastries
        </h1>
      </header>

      <main className="container mx-auto p-4">
        {Object.keys(menuItems).map((category) => (
          <Category
            key={category}
            category={category}
            items={menuItems[category]}
          />
        ))}
      </main>

      {/* Footer with primary color */}
      <footer className="bg-[#203732] text-center p-4 mt-8">
        <p className="text-white">Merci Coffee and Pastries © 2022</p>
      </footer>
    </div>
  );
}

export default App;
