import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Merci Coffee & Pastries
        </h1>
      </header>

      {/* Menu Section */}
      <main className="py-8 px-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Menu</h2>

        {/* Categories */}
        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-600">Coffee</h3>
          <ul className="mt-2">
            <li className="border-b border-gray-200 py-2">
              <span className="font-medium text-gray-800">Espresso</span>
              <span className="float-right">$2.50</span>
            </li>
            <li className="border-b border-gray-200 py-2">
              <span className="font-medium text-gray-800">Cappuccino</span>
              <span className="float-right">$3.00</span>
            </li>
            <li className="border-b border-gray-200 py-2">
              <span className="font-medium text-gray-800">Latte</span>
              <span className="float-right">$3.50</span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-600">Pastries</h3>
          <ul className="mt-2">
            <li className="border-b border-gray-200 py-2">
              <span className="font-medium text-gray-800">Croissant</span>
              <span className="float-right">$2.00</span>
            </li>
            <li className="border-b border-gray-200 py-2">
              <span className="font-medium text-gray-800">Muffin</span>
              <span className="float-right">$2.50</span>
            </li>
            <li className="border-b border-gray-200 py-2">
              <span className="font-medium text-gray-800">
                Pain au Chocolat
              </span>
              <span className="float-right">$3.00</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md py-4 px-8 mt-8">
        <p className="text-gray-600">
          © 2024 Merci Coffee & Pastries. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
