import React from "react";

const Category = ({ category, items }) => {
  return (
    <section className="menu-category mt-10">
      {/* Category title */}
      <h2 className="text-3xl font-bold text-[#203732] mb-6">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="menu-item bg-white rounded-lg border border-[#CED4DA] p-5 shadow-lg transition-transform hover:shadow-xl transform hover:scale-105"
          >
            {item.image && (
              <img
                src={process.env.PUBLIC_URL + `/images/${item.image}`}
                alt={item.name}
                className="h-64 w-full object-cover rounded-t-lg"
                onError={(e) => {
                  e.target.onerror = null; // prevents looping
                  e.target.src = "/images/default-image.jpg"; // Set a default image if the original fails
                }}
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#203732] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {item.priceHot && (
                  <span className="bg-[#203732] text-white font-bold py-1 px-3 rounded-full text-sm">
                    Hot: {item.priceHot}
                  </span>
                )}
                {item.priceIced && (
                  <span className="bg-[#203732] text-white font-bold py-1 px-3 rounded-full text-sm">
                    Iced: {item.priceIced}
                  </span>
                )}
                {!item.priceHot && !item.priceIced && (
                  <span className="bg-[#203732] text-white font-bold py-1 px-3 rounded-full text-sm">
                    Price: {item.price}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
