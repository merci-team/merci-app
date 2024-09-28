import React from "react";

const Category = ({ category, items }) => {
  return (
    <div className="menu-category mt-8">
      {/* Category title */}
      <h2 className="text-2xl font-semibold text-[#203732] mb-4">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="menu-item bg-gray-100 p-4 rounded-lg shadow"
          >
            {item.image && (
              <img
                src={process.env.PUBLIC_URL + `/images/${item.image}`}
                alt={item.name}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-[#203732]">
              {item.name}
            </h3>
            <p className="text-gray-700 text-sm">{item.description}</p>

            <div className="mt-2">
              {item.priceHot && (
                <p className="text-gray-600">
                  Hot:{" "}
                  <span className="font-semibold text-[#203732]">
                    {item.priceHot}
                  </span>
                </p>
              )}
              {item.priceIced && (
                <p className="text-gray-600">
                  Iced:{" "}
                  <span className="font-semibold text-[#203732]">
                    {item.priceIced}
                  </span>
                </p>
              )}
              {!item.priceHot && !item.priceIced && (
                <p className="text-gray-600">
                  Price:{" "}
                  <span className="font-semibold text-[#203732]">
                    {item.price}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
