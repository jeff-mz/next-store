"use client";

import { useCartContext } from "@/context/Cart";

const IncreaseDecreaseBtn = ({ data }) => {
  const { state, dispatch } = useCartContext();
  const itemInCart = state.find((item) => item.id === data.id);

  const handleAddToCart = () => {
    dispatch({
      type: "ADDTOCART",
      payload: data,
    });
  };
  const handleIncrease = () => {
    dispatch({
      type: "INCREASE",
      payload: data,
    });
  };

  const handleDecrease = () => {
    if (itemInCart.quantity === 1) {
      dispatch({ type: "REMOVE", payload: { id: data.id } });
    } else {
      dispatch({ type: "DECREASE", payload: { id: data.id } });
    }
  };

  return (
    <div className="mt-4">
      {!itemInCart ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center">
          <button
            onClick={handleDecrease}
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-2 focus:outline-none focus:ring-gray-100"
            aria-label="Decrease quantity"
          >
            <svg className="w-3 h-3 text-gray-900" viewBox="0 0 18 2">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <p className="bg-gray-50 border-x-0 border-gray-300  h-11 text-center text-gray-900 text-xl font-bold block py-2.5 w-[250px]">
            {itemInCart?.quantity}
          </p>
          <button
            onClick={handleIncrease}
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-2 focus:outline-none focus:ring-gray-100"
            aria-label="Increase quantity"
          >
            <svg className="w-3 h-3 text-gray-900" viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default IncreaseDecreaseBtn;
