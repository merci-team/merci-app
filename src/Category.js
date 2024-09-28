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
              <h3 className="text-xl font-bold text-[#203732]">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>

              <div className="mt-3">
                {item.priceHot && (
                  <p className="text-gray-700">
                    Hot:{" "}
                    <span className="font-bold text-[#203732]">
                      {item.priceHot}
                    </span>
                  </p>
                )}
                {item.priceIced && (
                  <p className="text-gray-700">
                    Iced:{" "}
                    <span className="font-bold text-[#203732]">
                      {item.priceIced}
                    </span>
                  </p>
                )}
                {!item.priceHot && !item.priceIced && (
                  <p className="text-gray-700">
                    Price:{" "}
                    <span className="font-bold text-[#203732]">
                      {item.price}
                    </span>
                  </p>
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
