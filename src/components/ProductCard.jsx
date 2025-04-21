import Link from "next/link";
import React from "react";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";

const ProductCard = ({ product }) => {
  const { id, image, title, description, price } = product;
  return (
    <div>
      {" "}
      <div
        key={id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-[200px] h-[250px] object-cover mx-auto"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {title.split(" ").slice(0, 3).join(" ")}
          </h2>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description.split(" ").slice(0, 10).join(" ") +
              (description.split(" ").length > 10 ? "..." : "")}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>
          <IncreaseDecreaseBtn data={product} />
          <Link
            href={`/store/${id}`}
            className="mt-4 w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-md transition-colors block text-center"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
